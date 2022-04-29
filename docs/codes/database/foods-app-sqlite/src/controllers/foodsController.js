const Food = require('../models/Food');

const index = async (req, res) => {
  const foods = await Food.readAll();

  res.render('foods/index.njk', { foods });
};

const create = async (req, res) => {
  const { name, image, price } = req.body;

  const food = await Food.create({ name, image, price });

  res.json(food);
};

const read = async (req, res) => {
  const { name } = req.query;

  const foods = name ? await Food.readByName(name) : await Food.readAll();

  res.json(foods);
};

const readById = async (req, res) => {
  const id = Number(req.params.id);

  const food = await Food.readById(id);

  if (food) {
    return res.json(food);
  } else {
    return res.status(400).json({ error: 'Food not found.' });
  }
};

const update = async (req, res) => {
  const id = Number(req.params.id);
  const { name, image, price } = req.body;

  const food = await Food.update(id, { name, image, price });

  if (food) {
    return res.json(food);
  } else {
    return res.status(400).json({ error: 'Food not found.' });
  }
};

const remove = async (req, res) => {
  const id = Number(req.params.id);

  if (await Food.remove(id)) {
    return res.status(204).send();
  } else {
    return res.status(400).json({ error: 'Food not found.' });
  }
};

module.exports = { index, create, read, readById, update, remove };
