Words = new Mongo.Collection('words');

if (Meteor.isClient) {

  Template.body.helpers({
    words() {
      return Words.find();
    }
  });

  Template.addWord.events({
    'submit .new-word'(event) {
      event.preventDefault();
      const text = event.target[0].value;
      Words.insert({
        text: text,
        createdAt: new Date()
      });
      event.target[0].value = '';
    }
  });

}
