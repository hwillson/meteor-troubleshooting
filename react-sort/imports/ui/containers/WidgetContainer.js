import { createContainer } from 'meteor/react-meteor-data';

import widgets from '/imports/api/widgets/collection.js';
import WidgetList from '../components/WidgetList.js';

const sort = new ReactiveVar(1);

const WidgetContainer = createContainer(() => {
  const allWidgets = widgets.find({}, { sort: { name: sort.get() } }).fetch();
  return {
    allWidgets,
    sort
  };
}, WidgetList);

export default WidgetContainer;
