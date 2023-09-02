import Database from '../database/database.js';

async function create({ name, value }) {
  const db = await Database.connect();

  if (name && value) {
    const sql = `
      INSERT INTO
        investments (name, value)
      VALUES
        (?, ?)
    `;

    const { lastID } = await db.run(sql, [name, value]);

    return await readById(lastID);
  } else {
    throw new Error('Unable to create investment');
  }
}

async function read(field, value) {
  const db = await Database.connect();

  if (field && value) {
    const sql = `
      SELECT
          id, name, value
        FROM
          investments
        WHERE
          ${field} = '?'
      `;

    const investments = await db.all(sql, [value]);

    return investments;
  }

  const sql = `
    SELECT
      id, name, value
    FROM
      investments
  `;

  const investments = await db.all(sql);

  return investments;
}

async function readById(id) {
  const db = await Database.connect();

  if (id) {
    const sql = `
      SELECT
          id, name, value
        FROM
          investments
        WHERE
          id = ?
      `;

    const investment = await db.get(sql, [id]);

    if (investment) {
      return investment;
    } else {
      throw new Error('Investment not found');
    }
  } else {
    throw new Error('Unable to find investment');
  }
}

async function update({ id, name, value }) {
  const db = await Database.connect();

  if (name && value && id) {
    const sql = `
      UPDATE
        investments
      SET
        name = ?, value = ?
      WHERE
        id = ?
    `;

    const { changes } = await db.run(sql, [name, value, id]);

    if (changes === 1) {
      return readById(id);
    } else {
      throw new Error('Investment not found');
    }
  } else {
    throw new Error('Unable to update investment');
  }
}

async function remove(id) {
  const db = await Database.connect();

  if (id) {
    const sql = `
      DELETE FROM
        investments
      WHERE
        id = ?
    `;

    const { changes } = await db.run(sql, [id]);

    if (changes === 1) {
      return true;
    } else {
      throw new Error('Investment not found');
    }
  } else {
    throw new Error('Investment not found');
  }
}

export default { create, read, readById, update, remove };
