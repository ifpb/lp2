import express from 'express';
import { bmi } from './bmi.js';

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
  console.log('App running on port 3000');
});
