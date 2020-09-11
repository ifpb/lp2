const express = require('express');
const app = express();

app.use(express.json());

const foods = [
  {
    id: 1,
    name: 'hambúrguer 1',
    price: 10.0,
  },
  {
    id: 2,
    name: 'sanduíche 1',
    price: 9.0,
  },
];

app.get('/foods', (req, res) => {
  const { name } = req.query;

  if (name) {
    const filteredFoods = [];

    for (const food of foods) {
      if (food.name.includes(name)) filteredFoods.push(food);
    }

    return res.json(filteredFoods);
  }

  res.json(foods);
});

app.get('/foods/:id', (req, res) => {
  const { id } = req.params;

  const index = id - 1;

  const food = foods[index];

  res.json(food);
});

app.post('/foods/', (req, res) => {
  const { name, price } = req.body;

  const id = foods.length;

  const food = { id, name, price };

  foods.push(food);

  res.json(foods);
});

app.put('/foods/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const index = id - 1;

  const food = { id, name, price };

  foods[index] = food;

  res.json(food);
});

app.delete('/foods/:id', (req, res) => {
  const { id } = req.params;

  const index = id - 1;

  foods.splice(index, 1);

  res.status(204).send();
});

app.listen(3000, () => {
  console.log(`App running at http://localhost:3000`);
});
