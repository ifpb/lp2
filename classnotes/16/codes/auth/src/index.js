const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const nunjucks = require('nunjucks');
const SQLiteStore = require('connect-sqlite3')(session);
const router = require('./routes');

const app = express();

app.set('view engine', 'njk');
nunjucks.configure('src/views', {
  express: app,
  autoescape: true,
  noCache: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    store: new SQLiteStore(),
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(router);

app.listen(3000, () => console.log('App running'));
