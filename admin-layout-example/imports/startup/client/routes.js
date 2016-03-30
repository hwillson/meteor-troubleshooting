import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/admin/layout.js';
import '../../ui/admin/welcome.js';

FlowRouter.route('/admin', {
  name: 'adminWelcome',
  action() {
    BlazeLayout.render('adminLayout', { main: 'adminWelcome' });
  },
});
