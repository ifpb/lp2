const Migration = require('../migrations');

(async () => {
  console.log('Migrations...');
  await Migration.up();
})();
