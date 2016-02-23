if (Meteor.isClient) {

  Template.body.helpers({
    products() {
      return [ 'product 1', 'product 2' ];
    }
  });

  Template.badProduct.events({
    'click button': (event, instance) => {
      console.log(instance.find('#price').value);
    }
  });

  Template.goodProduct.events({
    'click button': (event, instance) => {
      console.log(instance.find('.price').value);
    }
  });

}
