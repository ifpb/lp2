const currency = require('./currency');

function loadHelpers(njk) {
  njk.addFilter('currency', currency);
}

module.exports = loadHelpers;
