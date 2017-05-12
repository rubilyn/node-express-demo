const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  database: 'ned'
});

module.exports = db;
