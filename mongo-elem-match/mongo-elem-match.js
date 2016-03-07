GuestList = new Mongo.Collection('guest_list');

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

    GuestList.insert({
      list: [
        {
          entryOwner: 1,
          name: 'Joe'
        },
        {
          entryOwner: 1,
          name: 'Joe'
        },
        {
          entryOwner: 2,
          name: 'Frank'
        }
      ]
    });



  });
}
