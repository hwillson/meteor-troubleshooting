if (Meteor.isClient) {

  Template.body.onCreated(function () {
    this.result = new ReactiveVar(0);
  })

  Template.body.helpers({
    result() {
      return Template.instance().result.get();
    },
    winOrLose() {
      const instance = Template.instance();
      let winOrLose;
      if (instance.result.get() > 0) {
        winOrLose = (instance.result.get() > 0.5) ? 'You win!' : 'You lose!';
      }
      return winOrLose;
    }
  });

  Template.body.events({
    'click button'(event, instance) {
      instance.result.set(Math.random());
    }
  });

}
