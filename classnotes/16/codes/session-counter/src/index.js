const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);

const app = express();

app.use(cookieParser());
app.use(
  session({
    store: new SQLiteStore(),
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  })
);

app.get('/session', (req, res) => {
  res.json(req.session);
});

app.get('/counter', (req, res) => {
  const { counter } = req.session;

  const value = (counter || 0) + 1;

  req.session.counter = value;

  res.send(`counter = ${value}`);
});

app.get('/counter/clear', (req, res) => {
  delete req.session.counter;

  res.send('counter cleared');
});

app.listen(3000, () => console.log('App running'));
