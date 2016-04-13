import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.helpers({
  teamById(teamId) {
    return {
      _id: '123',
      name: 'Some Team'
    };
  },
  teamName() {
    return this.name;
  }
});
