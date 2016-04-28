import { Meteor } from 'meteor/meteor';
import secretSettings from '/imports/api/secret_settings/server/collection.js';

const privateSettings = Meteor.settings.private;
privateSettings.secret = {};
secretSettings.find().forEach((secretSetting) => {
  privateSettings.secret[secretSetting.key] = secretSetting.value;
});

console.log(Meteor.settings.private.secret.secretSetting1);
