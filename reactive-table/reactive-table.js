Players = new Mongo.Collection('default.players');

if (Meteor.isClient) {
  Template.myTemplate.onCreated(function onCreated() {
    this.subscribe('default.players');
  });

  Template.registerHelper('records', (user) => {
    return Players.find();
  });

  Template.myTemplate.helpers({
    players() {
      return Players.find();
    },
    fields() {
      return ['firstName'];
    }
  });
}

if (Meteor.isServer) {
  Meteor.publish('default.players', function publishFunction() {
    return Players.find();
  });
}

if (Meteor.isServer) {
  Meteor.startup(() => {
    if (!Players.find().count()) {
      Players.insert({ firstName: 'Jack'});
      Players.insert({ firstName: 'Tim'});
    }
  });
}
