Groups = new Mongo.Collection('groups');

if (Meteor.isServer) {
  Meteor.startup(() => {
    Groups.insert({ contacts: [] });
  });
}

Meteor.methods({
  test() {
    const groupId = Groups.findOne()._id;
    Groups.update(groupId, {
      $addToSet: {
        contacts: {
          name: 'Joe Smith'
        }
      }
    });
  }
});
