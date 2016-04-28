import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.onCreated(function onCreated() {
  const subError = new ReactiveVar();
  this.subscribe('fakeCollection', {
    onStop(error) {
      subError.set(error);
    }
  });
  this.autorun(() => {
    console.log(subError.get());
  });
});



export const MyAwesomeComponent = createContainer(() => {
  const subError = new ReactiveVar();
  let sub = Meteor.subscribe('some-data', {
    onStop(error) {
      if (error) {
        subError.set(error);
      }
    }
  });

  if (!sub.ready()) return { message: 'Loading...'};
  // if (!sub.ready()) return { message: 'Loading...'};
  Meteor.autorun(() => {
    if (subError.get()) {
      return { message: 'Failed.' };
    }
  });

  return {
	data: Data.find().fetch()
  }
}, MyInternalRenderComponent);
