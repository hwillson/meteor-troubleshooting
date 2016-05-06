import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { _ } from 'meteor/underscore';

const email = 'sharedemail@awesome.com';

_.times(2, (n) => {

  const userId = Accounts.createUser({
    username: `testuser${n}`,
    password: 'password',
  });
  Meteor.users.update(
    { _id: userId},
    { $set: {
      emails: [{
        address: email,
        verified: false,
      }]
    }}
  );
})
