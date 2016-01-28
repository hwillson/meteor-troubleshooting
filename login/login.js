Meteor.methods({
  testMethod() {
    console.log(this.connection);
  }
});

if (Meteor.isServer) {
  Accounts.onLogin((attempt) => {
    console.log(attempt.connection);
  });
}
