if (Meteor.isClient) {
  Template.body.helpers({
    imgData() {
      return [
        {
          img_source: '../images/earthElemental.png',
          alt: 'earth elemental'
        },
        {
          img_source: '../images/elementalAirPNGI.png',
          alt: 'air elemental'
        },
        {
          img_source: '../images/fireElemental.png',
          alt: 'fire elemental'
        },
        {
          img_source: '../images/waterElemental.png',
          alt: 'earth elemental'
        }
      ];
    }
  });
}
