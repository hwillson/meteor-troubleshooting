if (Meteor.isClient) {
  Template.body.onCreated(function () {

    this.autorun(() => {
      if (Accounts.loginServicesConfigured()) {
        Meteor.loginWithGoogle({
          requestPermissions: [
            'https://www.googleapis.com/auth/yt-analytics.readonly'
          ]
        }, () => {
          GoogleApi.get('youtube/analytics/v1/reports', {
            params: {
              ids: 'channel==MINE',
              'start-date': '2016-01-01',
              'end-date': '2016-02-01',
              metrics: 'views'
            }
          }, (error, result) => {
            console.log(error);
            console.log(result);
          });
        });
      }
    });

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // Get connection details from https://console.cloud.google.com.
    ServiceConfiguration.configurations.upsert(
      { service: 'google' },
      {
        $set: {
          clientId: 'XXX',
          secret: 'XXX'
        }
      }
    );
  });
}
