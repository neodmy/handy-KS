const System = require('systemic');
const { join } = require('path');

module.exports = () =>
  new System({ name: 'handy-KS' })
  .bootstrap(join(__dirname, 'components'));

