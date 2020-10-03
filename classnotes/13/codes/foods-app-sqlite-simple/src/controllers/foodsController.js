const Food = require('../models/Food');

const index = async (req, res) => {
  const foods = await Food.readAll();

  res.render('foods/index.njk', { foods });
};

const readAll = async (req, res) => {
  const foods = await Food.readAll();

  res.json(foods);
};

module.exports = { index, readAll };
