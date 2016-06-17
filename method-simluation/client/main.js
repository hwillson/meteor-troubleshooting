import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import '/imports/methods';
import './main.html';

Template.body.onCreated(function onCreated() {
  this.randomMessage = new ReactiveVar();
});

Template.body.helpers({
  randomMessage() {
    return Template.instance().randomMessage.get();
  },
});

Template.body.events({
  'click button'(event, instance) {
    Meteor.call('randomMessage', (error, result) => {
      instance.randomMessage.set(result);
    });
  },
});
