const Food = require('../models/Food');

function up() {
  Food.create({
    name: 'Salada',
    image: '/imgs/salada.jpg',
    price: 15.5,
  });

  Food.create({
    name: 'Hambúrguer',
    image: '/imgs/hamburguer.jpg',
    price: 10,
  });

  Food.create({
    name: 'Sanduíche',
    image: '/imgs/sanduiche.jpg',
    price: 9,
  });
}

module.exports = { up };
