const fs = require('fs');
const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const Seed = require('./seeders');
const Migration = require('./migrations');
const { dbFile } = require('./db');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'njk');

nunjucks.configure('src/views', {
  express: app,
  autoescape: true,
  noCache: true,
});

(async () => {
  if (!fs.existsSync(dbFile)) {
    await Migration.up();
    await Seed.up();
  }
})();

app.use(routes);

app.use((req, res, next) => {
  res.status(404).send('Content not found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal server error');
});

app.listen(3000, () => {
  console.log('Food App is running!');
});
