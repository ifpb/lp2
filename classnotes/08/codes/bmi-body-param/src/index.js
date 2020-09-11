const express = require('express');
const bmi = require('./bmi');

const app = express();
app.use(express.json());

app.post('/bmi', (req, res) => {
  const { weight, height } = req.body;

  const result = {
    weight,
    height,
    bmi: bmi(weight, height),
  };

  res.json(result);
});

app.listen(3000, () => {
  console.log('App running at http://localhost:3000');
});
