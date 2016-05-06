Package.describe({
  name: 'awesome-package',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.mainModule('lib/client/main.js', 'client');
});
