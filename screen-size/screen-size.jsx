if (Meteor.isClient) {
  Meteor.startup(function () {

    const App = React.createClass({

      resize () {
        this.setState({
          width: window.innerWidth,
          height: window.innerHeight
        });
      },

      componentWillMount () {
        this.resize();
      },

      componentDidMount () {
        window.addEventListener("resize", this.resize);
      },

      componentWillUnmount () {
        window.removeEventListener("resize", this.resize);
      },

      render () {
        return <div>width: {this.state.width}, height: {this.state.height}</div>
      }

    });

    ReactDOM.render(<App />, document.getElementById('App'));

  });
}
