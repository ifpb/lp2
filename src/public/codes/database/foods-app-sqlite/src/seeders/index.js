const Food = require('../models/Food');

async function up() {
  await Food.create({
    name: 'Salada',
    image: '/imgs/salada.jpg',
    price: 15.5,
  });

  await Food.create({
    name: 'Hambúrguer',
    image: '/imgs/hamburguer.jpg',
    price: 10,
  });

  await Food.create({
    name: 'Sanduíche',
    image: '/imgs/sanduiche.jpg',
    price: 9,
  });
}

module.exports = { up };
