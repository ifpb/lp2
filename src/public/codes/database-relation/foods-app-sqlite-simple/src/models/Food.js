const { conn } = require('../db');

async function create(data) {
  const sql = `
    INSERT INTO
      foods (id, name, image, price, category_id)
    VALUES
      (?, ?, ?, ?, ?)
    `;

  const db = await conn();

  const { id, name, image, price, category_id } = data;

  const { lastID } = await db.run(sql, [id, name, image, price, category_id]);

  return lastID;
}

async function readAll() {
  const sql = `
    SELECT
      foods.name, foods.image, foods.price, categories.name as category
    FROM
      categories INNER JOIN foods
    WHERE
      categories.id = foods.category_id
  `;

  const db = await conn();

  const foods = await db.all(sql);

  return foods;
}

module.exports = { create, readAll };
