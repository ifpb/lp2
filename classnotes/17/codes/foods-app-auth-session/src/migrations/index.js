const { conn } = require('../db');

async function up() {
  const db = await conn();

  await db.run(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    )
  `);

  await db.run(`
    CREATE TABLE IF NOT EXISTS foods (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      image TEXT,
      price DOUBLE,
      category_id INTEGER,
      FOREIGN KEY (category_id) REFERENCES categories (id)
    )
  `);

  await db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT
    )
  `);
}

async function down() {
  const db = await conn();

  await db.run('DROP TABLE users');

  await db.run('DROP TABLE foods');

  await db.run('DROP TABLE categories');
}

module.exports = { up, down };
