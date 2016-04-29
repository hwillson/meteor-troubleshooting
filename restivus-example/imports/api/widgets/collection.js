import { Mongo } from 'meteor/mongo';

const widgets = new Mongo.Collection('widgets');

export default widgets;
