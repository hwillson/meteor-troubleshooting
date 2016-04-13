import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.helpers({
  getDynamicData() {
    return {
      someField: 'hello',
      aFunction: () => {
        console.log('hello world');
      }
    }
  }
});
