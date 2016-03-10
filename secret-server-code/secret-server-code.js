Points = new Mongo.Collection('points');
const testLabel = 'test';

if (Meteor.isClient) {

  Template.body.onCreated(function onCreated() {
    this.pointsRequested = new ReactiveVar(false);
    const handle = this.subscribe('points');
    this.autorun(() => {
      if (handle.ready()) {
        const point = Points.findOne({ label: testLabel });
        this.pointsRequested.set(point.requested);
      }
    });
  });

  Template.body.helpers({
    pointsRequested() {
      return Template.instance().pointsRequested.get();
    }
  });

  Template.body.events({
    'click button'() {
      Meteor.call('requestPoints');
    },
    'click .js-reset'(event) {
      event.preventDefault();
      Meteor.call('reset');
    }
  });

}

if (Meteor.isServer) {

  Meteor.startup(() => {
    if (Points.find().count() === 0) {
      Points.insert({
        label: testLabel,
        requested: false
      });
    }
  });

  Meteor.publish('points', function publishPoints() {
    return Points.find();
  });

}

Meteor.methods({

  requestPoints() {
    Points.update({ label: testLabel }, { $set: { requested: true }});
    if (!this.isSimulation) {
      console.log('Secret stuff is happening - check the server console.');
      Meteor._sleepForMs(5000);
      SecretStuff.doSomethingSecret();
    }
  },

  reset() {
    Points.update({ label: testLabel }, { $set: { requested: false }});
  }

});
