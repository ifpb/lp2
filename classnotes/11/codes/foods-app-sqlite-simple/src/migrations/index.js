const { conn } = require('../db');

async function up() {
  const sql = `
    CREATE TABLE IF NOT EXISTS foods (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      image TEXT,
      price DOUBLE
    )
  `;

  const db = await conn();

  await db.run(sql);
}

async function down() {
  const sql = `DROP TABLE foods`;

  const db = await conn();

  await db.run(sql);
}

module.exports = { up, down };
