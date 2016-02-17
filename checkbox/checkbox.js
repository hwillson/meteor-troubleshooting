if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click #theSitesSelectAll': function (event, instance) {
      const $checkbox = instance.$('.theSiteCheckbox');
      $checkbox.prop('checked', !$checkbox.prop('checked'));
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
