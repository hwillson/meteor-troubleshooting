let fireReload = false;

FlowRouter.route('/', {
  triggersEnter: [startRouteReload],
  action() {
    console.log('Awesome action!');
  },
  triggersExit: [stopRouteReload]
});

FlowRouter.route('/route1', {
  action() {
    console.log('Route 1!');
  }
});

FlowRouter.route('/route2', {
  action() {
    console.log('Route 2!');
  }
});

function startRouteReload(context, redirect, stop) {
  if (fireReload) {
    console.log('Reloading ...');
    FlowRouter.reload();
    stop();
  }
}

function stopRouteReload() {
  fireReload = !fireReload;
}
