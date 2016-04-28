import { Template } from 'meteor/templating';

import './main.html';

Template.body.helpers({
  myHelperpolosellinput() {
    return Orderbookpolo.findOne(
      { type: 'sell' },
      { sort: { createdAt: -1 }}
    );
  }
});

Template.body.events({
  'keyup input#buyrate'(event, template) {
    event.preventDefault();
    console.log('yolo');
  },
  'change input#buyrate'(event, template) {
    event.preventDefault();
  },
  'propertychange input#buyrate'(event, template) {
    event.preventDefault();
    console.log('yolo');
  },
  'propertychange input#buyrate'(event, template) {
    event.preventDefault();
    console.log('yolo');
  },
  'paste input#buyrate'(event, template) {
    event.preventDefault();
    console.log('yolo');
  }
});
