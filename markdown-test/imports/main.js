import { Template } from 'meteor/templating';

import './main.html';

Template.body.helpers({
  stuff() {
    return 'This should be __underlined__!';
  }
});

