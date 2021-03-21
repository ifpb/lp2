const Category = require('../models/Category');

const readAll = async (req, res) => {
  const categories = await Category.readAll();

  res.json(categories);
};

module.exports = { readAll };
