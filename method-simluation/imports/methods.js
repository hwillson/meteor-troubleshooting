import { Meteor } from 'meteor/meteor';

Meteor.methods({
  randomMessage() {
    if (!this.isSimulation) {
      import { generateRandomMessage } from './message_generator';
      return generateRandomMessage();
    } else {
      console.log('In the client stub - not doing anything ...');
    }
  }
})
