import widgets from '/imports/api/widgets/collection.js';

if (widgets.find().count() === 0) {
  widgets.insert({ name: 'Test Widget' });
}
