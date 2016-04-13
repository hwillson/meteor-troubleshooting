// import $ from 'jquery';
// const $ = require('jquery');
// global.jQuery = $;
global.jQuery = require('jquery');
require('bootstrap');
// import bootstrap from 'bootstrap';
import bootbox from 'bootbox';

//console.log(bootbox);

// $(function () {
  bootbox.alert("Hello world!", function() {
    console.log("Alert Callback");
  });
// });
