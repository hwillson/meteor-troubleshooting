import widgets from '/imports/api/widgets/collection.js';

if (widgets.find().count() === 0) {
  widgets.insert({ name: 'Test Widget 1' });
  widgets.insert({ name: 'Test Widget 2' });
  widgets.insert({ name: 'Test Widget 3' });
  widgets.insert({ name: 'Test Widget 4' });
  widgets.insert({ name: 'Test Widget 5' });
}
