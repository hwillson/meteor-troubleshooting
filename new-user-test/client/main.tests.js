import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { chai, expect } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';

describe('Accounts', function () {

  beforeEach(function () {
    resetDatabase();
  });

  it('should be able to create a user', function () {
    const createUser = new Promise((resolve, reject) => {
      Accounts.createUser({
        username: 'demo',
        email: 'demo@demo.com',
        password: 'demopassword',
      }, (error) => {
        if (error) {
          reject(error);
        } else {
          const newUser = Meteor.users.findOne();
          resolve(newUser);
        }
      });
    });
    return createUser.then(function (newUser) {
      expect(newUser).to.not.be.undefined;
      expect(newUser.username).to.equal('demo');
    });
  });

});
