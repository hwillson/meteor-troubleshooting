TestSchema = new SimpleSchema({
  dateTest: {
    type: Date,
    autoform: {
      afFieldInput: {
        type: 'bootstrap-datetimepicker',
        dateTimePickerOptions: {
          pickDate: false
        }
      }
    }
  }
});

if (Meteor.isClient) {
  Template.body.helpers({
    schema() {
      return TestSchema;
    }
  });
}
