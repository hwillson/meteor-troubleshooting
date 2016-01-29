Contacts = new Mongo.Collection('contacts');

TabularTables = {};

TabularTables.Contacts = new Tabular.Table({
  name: 'Contacts',
  collection: Contacts,
  columns: [
    { data: 'firstName', title: 'First Name' }
  ]
});

if (Meteor.isClient) {
  Template.body.helpers({
    selector() {
      return {
        firstName: {
          $regex: '^t',
          $options: 'i'
        }
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(() => {
    if (!Contacts.find().count()) {
      Contacts.insert({ firstName: 'Jack'});
      Contacts.insert({ firstName: 'Tim'});
    }
  });
}
