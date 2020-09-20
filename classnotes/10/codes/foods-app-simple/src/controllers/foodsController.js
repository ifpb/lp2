const Food = require('../models/Food');

const index = (req, res) => {
  const foods = Food.readAll();

  res.render('foods/index.njk', { foods });
};

const readAll = (req, res) => {
  const foods = Food.readAll();

  res.json(foods);
};

module.exports = { index, readAll };
