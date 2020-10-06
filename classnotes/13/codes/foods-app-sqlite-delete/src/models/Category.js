const { conn } = require('../db');

async function create(data) {
  const sql = 'INSERT INTO categories (id, name) VALUES (?, ?)';

  const db = await conn();

  const { id, name } = data;

  const { lastID } = await db.run(sql, [id, name]);

  return lastID;
}

module.exports = { create };
