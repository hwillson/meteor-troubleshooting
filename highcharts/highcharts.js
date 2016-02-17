if (Meteor.isClient) {

  Template.body.onCreated(function () {
    const instance = Template.instance();
    instance.chartData = new ReactiveVar([
      30.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8
    ]);
    Meteor.setTimeout(function () {
      instance.chartData.set([
        4.9, 3.2, 9.7, 12.5, 17.9, 5.2, 12.0, 11.6, 12.2, 9.3, 3.6, 2.8
      ]);
    }, 5000);
  });

  Template.body.onRendered(function () {

    this.autorun(function () {
      Highcharts.chart('chart-container', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          marginBottom: 50,
          spacingBottom: 40
        },
        title: {
          text: "My views"
        },
        xAxis: {
          categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ]
        },
        yAxis: {
          title: {
            text: 'Views'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        legend: {
          enabled: true,
          floating: true,
          verticalAlign: 'bottom',
          align:'center',
          y:40
        },
        series: [{
          name: 'Channel Name',
          data: Template.instance().chartData.get()
        }]
      });
    });

  });

}
