import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { _ } from 'meteor/underscore';

import './main.html';

Template.body.helpers({

  catalog() {
    const testCatalog = {
      firstItem: 'blah 1',
      secondItem: 'blah 2',
      thirdItem: 'blah 3'
    };
    return _.pairs(testCatalog);
  }

});
