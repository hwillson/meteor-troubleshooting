if (Meteor.isClient) {

  Template.body.helpers({
    showRegister() {
      return Session.get('showRegister');
    }
  });

  Template.login.events({
    'click button'() {
      alert('Do login stuff!');
    },
    'click .js-show-register'(event) {
      event.preventDefault();
      Session.set('showRegister', true);
    }
  });

  Template.register.events({
    'click button'() {
      alert('Do registration stuff!');
    },
    'click .js-show-login'(event) {
      event.preventDefault();
      Session.set('showRegister', false);
    }
  });

}
