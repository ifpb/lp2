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

async function createAutoInc(data) {
  const sql = `
    INSERT INTO
      foods (name, image, price, category_id)
    VALUES
      (?, ?, ?, ?)
    `;

  const db = await conn();

  const { name, image, price, category_id } = data;

  const { lastID } = await db.run(sql, [name, image, price, category_id]);

  return lastID;
}

async function readAll() {
  const sql = `
    SELECT
      foods.id, foods.name, foods.image, foods.price, categories.name as category
    FROM
      categories INNER JOIN foods
    WHERE
      categories.id = foods.category_id
  `;

  const db = await conn();

  const foods = await db.all(sql);

  return foods;
}

async function readById(id) {
  const sql = `
    SELECT
      foods.id, foods.name, foods.image, foods.price, categories.name as category
    FROM
      categories INNER JOIN foods
    WHERE
      categories.id = foods.category_id AND
      foods.id = ?
  `;

  const db = await conn();

  const food = await db.get(sql, id);

  return food;
}

async function update(id, data) {
  const sql = `
    UPDATE
      foods
    SET
      name = ? , image = ?, price = ?, category_id = ?
    WHERE
      id = ?
  `;

  const db = await conn();

  const { name, image, price, category_id } = data;

  const { changes } = await db.run(sql, [name, image, price, category_id, id]);

  return changes;
}

async function destroy(id) {
  const sql = `
    DELETE FROM
      foods
    WHERE
      id = ?
  `;

  const db = await conn();

  const { lastID } = await db.run(sql, [id]);

  return lastID;
}

module.exports = { create, createAutoInc, readAll, readById, update, destroy };
