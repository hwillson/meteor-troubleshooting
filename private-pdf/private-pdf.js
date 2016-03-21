if (Meteor.isClient) {
  Template.body.events({
    'click .js-download-pdf'(event) {
      event.preventDefault();
      Meteor.call('downloadPdf', (error, pdf) => {
        window.open(`data:application/pdf;base64, ${pdf}`);
      });
    }
  });
}

Meteor.methods({
  downloadPdf() {
    if (!this.isSimulation) {
      const rawPdf = Assets.getBinary('meteor.pdf');
      const jsonPdf = EJSON.toJSONValue(rawPdf);
      return jsonPdf['$binary'];
    }
  }
});
