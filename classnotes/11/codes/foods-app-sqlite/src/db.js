const Database = require('sqlite-async');

async function conn() {
  const conn = await Database.open('foods.db');
  return conn;
}

module.exports = { conn };
