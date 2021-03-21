const Seed = require('../seeders');

(async () => {
  console.log('Seeders...');
  await Seed.up();
})();
