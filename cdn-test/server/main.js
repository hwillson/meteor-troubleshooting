import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  WebAppInternals.setBundledJsCssPrefix('blah');
});
