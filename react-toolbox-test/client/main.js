import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import Button from 'react-toolbox/lib/button';

const CustomButton = () => (
  <Button label="Hello world" raised accent />
);

Meteor.startup(() => {
  render(<CustomButton />, document.getElementById('app'));
});
