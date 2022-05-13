const Food = require('../models/Food');

const index = async (req, res) => {
  const foods = await Food.readAll();

  res.render('foods/index.njk', { foods });
};

const readAll = async (req, res) => {
  const foods = await Food.readAll();

  res.json(foods);
};

const destroy = async (req, res) => {
  const { id } = req.params;

  const result = await Food.destroy(id);

  if (result) {
    res.status(204).send();
  } else {
    return res.status(400).json({ error: 'Food not found.' });
  }
};

module.exports = { index, readAll, destroy };
