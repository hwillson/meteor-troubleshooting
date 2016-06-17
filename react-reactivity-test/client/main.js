import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { render } from 'react-dom';
import React from 'react';

import { Widgets } from '../imports/api/widgets/collection';

class WidgetsComponent extends React.Component {
  componentDidMount() {
    Tracker.autorun(() => {
      const handle = Meteor.subscribe('widgets');
      console.log(handle);
      console.log(handle.ready());
      if (handle.ready()) {
        const allWidgets = Widgets.find().fetch();
        console.log(allWidgets);
        console.log(allWidgets);
      }
    });
  }

  render() {
    return (
      <div className="widgets">
        Widgets!
      </div>
    );
  }
}

Meteor.startup(() => {
  render(<WidgetsComponent />, document.getElementById('app'));
});
