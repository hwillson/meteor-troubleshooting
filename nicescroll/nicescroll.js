if (Meteor.isClient) {
  Template.body.onRendered(function () {
    $('#example1').niceScroll();
  });
}
