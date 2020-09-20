let key = 1;
const foods = [];

function create(foodValues) {
  const food = { id: key++, ...foodValues };

  foods.push(food);

  return food;
}

function readAll() {
  return foods;
}

module.exports = { create, readAll };
