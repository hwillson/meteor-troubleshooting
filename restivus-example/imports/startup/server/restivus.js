import { Restivus } from 'meteor/nimble:restivus';

import widgets from '/imports/api/widgets/collection.js';

const api = new Restivus({
  useDefaultAuth: true,
  prettyJson: true
});

api.addCollection(widgets);
