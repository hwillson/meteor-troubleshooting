import { Template } from 'meteor/templating';
import './main.html';

Template.body.events({
  'change input[type=file]'(event) {
    console.log(event);
  },
});
