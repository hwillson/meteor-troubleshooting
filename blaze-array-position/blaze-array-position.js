const imgData = [
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

if (Meteor.isClient) {
  Template.body.helpers({
    getImage(position) {
      return imgData[position];
    },
    getImageSource(position) {
      return imgData[position].img_source;
    }
  });
}
