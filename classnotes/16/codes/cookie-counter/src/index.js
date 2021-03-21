const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/cookies', (req, res) => {
  res.json(req.cookies);
});

app.get('/counter', (req, res) => {
  const { counter } = req.cookies;

  const value = (+counter || 0) + 1;

  res.cookie('counter', value, { maxAge: 360000 });

  res.send(`counter = ${value}`);
});

app.get('/counter/clear', (req, res) => {
  res.clearCookie('counter');

  res.send('counter cleared');
});

app.listen(3000, () => console.log('App running'));
