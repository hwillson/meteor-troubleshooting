import { Meteor } from 'meteor/meteor';

import { Widgets } from '../collection.js';

Meteor.publish('widgets', function publishWidgets() {
  return Widgets.find();
});
