if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {

  Meteor.startup(function () {
    // code to run on server at startup
  });

  sitemaps.add('/sitemap.xml', function sitemaps(req) {
    let host = Meteor.absoluteUrl();
    if (req && req.headers && req.headers.host) {
      host = `http://${req.headers.host}/`;
    }
    return [
      { page: `${host}page1`, lastmod: new Date() },
      { page: `${host}page2`, lastmod: new Date() }
    ];
  });

}
