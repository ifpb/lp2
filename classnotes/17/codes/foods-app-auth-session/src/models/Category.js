const { conn } = require('../db');

async function create(data) {
  const sql = 'INSERT INTO categories (id, name) VALUES (?, ?)';

  const db = await conn();

  const { id, name } = data;

  const { lastID } = await db.run(sql, [id, name]);

  return lastID;
}

async function readAll() {
  const sql = `
    SELECT
      *
    FROM
      categories
  `;

  const db = await conn();

  const foods = await db.all(sql);

  return foods;
}

module.exports = { create, readAll };
