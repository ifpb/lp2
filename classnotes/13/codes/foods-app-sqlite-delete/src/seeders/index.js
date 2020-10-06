const Food = require('../models/Food');
const Category = require('../models/Category');
const fs = require('fs');
const path = require('path');

function up() {
  const content = fs.readFileSync(path.join(__dirname, 'data.json'));
  const data = JSON.parse(content);

  for (const category of data.categories) {
    Category.create(category);
  }

  for (const food of data.foods) {
    Food.create(food);
  }
}

module.exports = { up };
