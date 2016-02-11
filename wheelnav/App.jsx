App = React.createClass({

  componentDidMount() {
    const myWheelnav = new wheelnav('wheelnav');
    myWheelnav.slicePathFunction = slicePath().DonutSlice;
    myWheelnav.colors = new Array('mediumorchid', 'royalblue', 'darkorange');
    myWheelnav.createWheel([icon.github, icon.people, icon.smile]);
  },

  render() {
    return (
      <div id="wheelnav"></div>
    );
  }

});
