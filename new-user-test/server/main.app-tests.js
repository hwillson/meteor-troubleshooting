import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { Accounts } from 'meteor/accounts-base';
import { chai, expect, assert } from 'meteor/practicalmeteor:chai';
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

  it('should fail on async method wrong assertion', function (done) {
    HTTP.get('http://google.com', (error, result) => {
      expect(error).to.not.exist;
      try {
        expect(1).to.equal(2);
      } catch (err) {
        done(err);
      }
      done();
    });
    // const promise = new Promise((resolve, reject) => {
    //   HTTP.get('http://google.com', (error, result) => {
    //     if (error) {
    //       reject(error);
    //     } else {
    //       resolve(result);
    //     }
    //   });
    // });
    // return promise.then(
    //   function (result) {
    //     console.log('result', result.statusCode);
    //     try {
    //       expect(1).to.equal(2);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //     console.log('this message is not printed!');
    //   },
    //   function (error) {
    //     console.log(error);
    //   }
    // );
  });

});
