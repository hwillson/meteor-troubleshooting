import secretSettings from '/imports/api/secret_settings/server/collection.js';

if (secretSettings.find().count() === 0) {
  secretSettings.insert({
    key: 'secretSetting1',
    value: 'Some super secret value!'
  });
}
