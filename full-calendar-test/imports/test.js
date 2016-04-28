import { Template } from 'meteor/templating';
import $ from 'jquery';

Template.body.onRendered(function onRendered() {
  $('#calendar').fullCalendar();
});
