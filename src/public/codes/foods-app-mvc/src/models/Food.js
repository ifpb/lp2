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

function readById(id) {
  return foods.find((food) => food.id === id);
}

function readByName(name) {
  const filteredFoods = foods.filter((food) => food.name.includes(name));

  return filteredFoods;
}

function update(id, foodValues) {
  const index = foods.findIndex((food) => food.id === id);

  if (index >= 0) {
    const food = { id, ...foodValues };

    foods[index] = food;

    return food;
  }

  return false;
}

function remove(id) {
  const index = foods.findIndex((food) => food.id === id);

  if (index >= 0) {
    foods.splice(index, 1);
    return true;
  }

  return false;
}

module.exports = {
  create,
  readAll,
  readById,
  readByName,
  update,
  remove,
};
