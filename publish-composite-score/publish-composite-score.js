Questions = new Mongo.Collection('questions');

if (Meteor.isClient) {
  Template.body.onCreated(function onCreated() {
    const filter = 'another';
    const handle = this.subscribe('questions', filter);
    Tracker.autorun(() => {
      if (handle.ready()) {
        console.log(Questions.find().fetch());
      }
    });
  });
}

if (Meteor.isServer) {

  Meteor.startup(() => {
    if (Questions.find().count() === 0) {
      Questions.insert({
        content: 'This is a question.'
      });
      Questions.insert({
        content: 'This is another question.'
      });
    }
  });

  Questions._ensureIndex({
    content: 'text'
  });

  Meteor.publishComposite('questions', function questions(filter) {
    check(filter, String);
    return {
      find() {
        return Questions.find({
          $text: {
            $search: filter
          }
        }, {
          fields: {
            score: {
              $meta: 'textScore'
            }
          },
          sort: {
            score: {
              $meta: 'textScore'
            }
          },
          limit: 30
        }, {
          transform: null
        });
      }
    }
  });

}
