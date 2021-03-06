if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Meteor.methods({
  sendEmail: function (email) {
    if (!this.isSimulation) {
      if (email.to) {
        Meteor.Sendgrid.send({
          to: email.to, from: email.from, subject: email.subject, text: email.body
        });
      } else {
        throw new Meteor.Error('Error', 'E-mail was not sent');
      }
    }
  }
});
