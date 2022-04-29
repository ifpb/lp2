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

async function readByName(name) {
  const sql = 'SELECT * FROM foods WHERE name LIKE ?';

  const db = await conn();

  const foods = await db.all(sql, name);

  return foods;
}

async function update(id, data) {
  const sql = 'UPDATE foods SET name = ?, image = ?, price = ? WHERE id = ?';

  const db = await conn();

  const { name, image, price } = data;

  const { changes } = await db.run(sql, [name, image, price, id]);

  return changes === 1 ? readById(id) : false;
}

async function remove(id) {
  const sql = 'DELETE FROM foods WHERE id = ?';

  const db = await conn();

  const { changes } = await db.run(sql, id);

  return changes === 1;
}

module.exports = {
  create,
  readAll,
  readById,
  readByName,
  update,
  remove,
};
