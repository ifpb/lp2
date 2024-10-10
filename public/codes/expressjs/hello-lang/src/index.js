import express from 'express';

const app = express();

app.get('/hello/pt', (req, res) => {
  res.send('Olá Mundo!');
});

app.get('/hello/en', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
