import express from 'express';
import { bmi } from './bmi.js';

const app = express();

app.get('/bmi', (req, res) => {
  const weight = Number(req.query.weight);
  const height = Number(req.query.height);

  const result = {
    weight,
    height,
    bmi: bmi(weight, height),
  };

  res.json(result);
});

app.listen(3000, () => {
  console.log(`App running at http://localhost:3000`);
});
