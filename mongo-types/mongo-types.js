Data = new Mongo.Collection('data');

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

      console.log(Data.find({ $where : "Array.isArray(this.data)" }).fetch());
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(() => {
    if (!Data.find().count()) {
      Data.insert({ data: 'Test String'});
      Data.insert({ data: ['Array Value 1', 'Array Value 2'] });
    }
  });
}
