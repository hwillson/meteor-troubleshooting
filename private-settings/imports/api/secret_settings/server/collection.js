import { Mongo } from 'meteor/mongo';

const secretSettings = new Mongo.Collection('secret_settings');
export default secretSettings;
