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

//var proc = Npm.require('child_process').spawn('node');
if (Meteor.isServer) {
  Meteor.startup(function () {
    process.exit(1);
  });
}
