import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import Investment from '../models/Investment.js';

async function up() {
  const file = resolve('src', 'database', 'seeders.json');

  const seed = JSON.parse(readFileSync(file));

  for (const investment of seed.investments) {
    await Investment.create(investment);
  }
}

export default { up };
