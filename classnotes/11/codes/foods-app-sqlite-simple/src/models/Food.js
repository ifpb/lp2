const { conn } = require('../db');

async function create(data) {
  const sql = 'INSERT INTO foods (name, image, price) VALUES (?, ?, ?)';

  const db = await conn();

  const { name, image, price } = data;

  const { lastID } = await db.run(sql, [name, image, price]);

  return readById(lastID);
}

async function readAll() {
  const sql = 'SELECT * FROM foods';

  const db = await conn();

  const foods = await db.all(sql);

  return foods;
}

async function readById(id) {
  const sql = 'SELECT * FROM foods WHERE id = ?';

  const db = await conn();

  const food = await db.get(sql, id);

  return food;
}

module.exports = { create, readAll, readById };
