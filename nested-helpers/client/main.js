import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

const collection = [
  {
    "scheduled_date" : "16.06.2015",
    "scheduled_time" : "20:00",
    "scheduled_weekday" : "Ti",
  },
  {
    "scheduled_date" : "16.06.2015",
    "scheduled_time" : "21:00",
    "scheduled_weekday" : "Ti",
  },
  {
    "scheduled_date" : "16.06.2015",
    "scheduled_time" : "22:00",
    "scheduled_weekday" : "Ti",
  },
  {
    "scheduled_date" : "23.06.2015",
    "scheduled_time" : "20:00",
    "scheduled_weekday" : "Ti",
  },
  {
    "scheduled_date" : "23.06.2015",
    "scheduled_time" : "21:00",
    "scheduled_weekday" : "Ti",
  },
  {
    "scheduled_date" : "23.06.2015",
    "scheduled_time" : "22:00",
    "scheduled_weekday" : "Ti",
  }
];

Template.body.onCreated(function onCreated() {

  this.scheduleData = new ReactiveVar({});

  const data = {};
  //Collection.find().forEach((item) => {
  collection.forEach((item) => {
    const key = `${item.scheduled_weekday} ${item.scheduled_date}`;
    if (data.hasOwnProperty(key)) {
      data[key].push(item.scheduled_time);
    } else {
      data[key] = [item.scheduled_time];
    }
  });

  this.scheduleData.set(data);

});

Template.body.helpers({
  dates() {
    return Object.keys(Template.instance().scheduleData.get());
  },

  schedule(date) {
    return Template.instance().scheduleData.get()[date];
  }
});
