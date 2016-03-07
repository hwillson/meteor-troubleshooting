if (Meteor.isClient) {
  Template.body.events({
    'click button'() {
      Meteor.call('sqlAnywhereTest');
    }
  });
}

Meteor.methods({
  sqlAnywhereTest() {
    if (!this.isSimulation) {
      const sql = Meteor.npmRequire('sqlanywhere');
      const db = sql.createConnection();
      const dbParams = {
        Host: '192.168.1.10:49156',
        UserId: 'user',
        Password: 'password'
      };
      const dbConnect = Meteor.wrapAsync(db.connect, db);
      const dbExec = Meteor.wrapAsync(db.exec, db);
      const dbDisconnect = Meteor.wrapAsync(db.disconnect, db);
      try {
        dbConnect(dbParams);
        dbExec('Some SQL Statement');
        dbDisconnect();
      } catch (error) {
        console.log(error);
      }
    }
  }
});
