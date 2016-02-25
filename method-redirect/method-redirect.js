if (Meteor.isClient) {
  Template.body.events({
    'click button': (event) => {
      $(event.currentTarget).html('Redirecting ...');
      Meteor.call('getRedirectUrl', (error, redirectUrl) => {
        window.location.replace(redirectUrl);
      });
    }
  });
}

Meteor.methods({
  getRedirectUrl() {
    if (!this.isSimulation) {
      Meteor._sleepForMs(2000);
      return 'https://meteor.com';
    }
  }
})
