const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let key = 1;
const foods = [];

app.post('/foods', (req, res) => {
  const { name, price } = req.body;

  const id = key++;

  const food = { id, name, price };

  foods.push(food);

  res.status(201).json(food);
});

app.get('/foods', (req, res) => {
  const { name } = req.query;

  if (name) {
    const filteredFoods = foods.filter((food) => food.name.includes(name));

    return res.json(filteredFoods);
  }

  res.json(foods);
});

app.get('/foods/:id', (req, res) => {
  const id = Number(req.params.id);

  const food = foods.find((food) => food.id === id);

  if (food) {
    return res.json(food);
  } else {
    return res.status(400).json({ error: 'Food not found.' });
  }
});

app.put('/foods/:id', (req, res) => {
  const id = Number(req.params.id);
  const { name, price } = req.body;

  const index = foods.findIndex((food) => food.id === id);

  if (index >= 0) {
    const food = { id, name, price };

    foods[index] = food;

    res.json(food);
  } else {
    return res.status(400).json({ error: 'Food not found.' });
  }
});

app.delete('/foods/:id', (req, res) => {
  const id = Number(req.params.id);

  const index = foods.findIndex((food) => food.id === id);

  if (index >= 0) {
    foods.splice(index, 1);

    res.status(204).send();
  } else {
    return res.status(400).json({ error: 'Food not found.' });
  }
});

app.listen(3000, () => {
  console.log('Food API is running!');
});
