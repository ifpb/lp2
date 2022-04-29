const Food = require('../models/Food');

const index = (req, res) => {
  const foods = Food.readAll();

  res.render('foods/index.njk', { foods });
};

const create = (req, res) => {
  const { name, image, price } = req.body;

  const food = Food.create({ name, image, price });

  res.json(food);
};

const read = (req, res) => {
  const { name } = req.query;

  const foods = name ? Food.readByName(name) : Food.readAll();

  res.json(foods);
};

const readById = (req, res) => {
  const id = Number(req.params.id);

  const food = Food.readById(id);

  if (food) {
    return res.json(food);
  } else {
    return res.status(400).json({ error: 'Food not found.' });
  }
};

const update = (req, res) => {
  const id = Number(req.params.id);
  const { name, image, price } = req.body;

  const food = Food.update(id, { name, image, price });

  if (food) {
    return res.json(food);
  } else {
    return res.status(400).json({ error: 'Food not found.' });
  }
};

const remove = (req, res) => {
  const id = Number(req.params.id);

  if (Food.remove(id)) {
    return res.status(204).send();
  } else {
    return res.status(400).json({ error: 'Food not found.' });
  }
};

module.exports = { index, create, read, readById, update, remove };
