import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

const hubs = [
  { _id: 1, name: 'Hub test 1' },
  { _id: 2, name: 'Hub test 2' }
];

const renderIfData = (hubs) => {
  if (hubs && hubs.length > 0) {
    return hubs.map((hub) => {
      return (
        <li key={hub._id} onClick={()=>{ alert('KITTENS RULE') }}>
          { hub.name }
        </li>
      );
    });
  } else {
    return <p>No hubs yet!</p>;
  }
};

const SidebarHubs = ({hubs}) => (
  <div>
    <h1>Hubs</h1>
    <ul>{renderIfData(hubs)}</ul>
  </div>
);

Meteor.startup(() => {
  render(<SidebarHubs hubs={hubs} />, document.getElementById('app'));
});
