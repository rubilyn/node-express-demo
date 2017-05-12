const db = require('./index');

db.query(`
  CREATE TABLE posts (
    id SERIAL,
    title VARCHAR(255),
    content TEXT,
    author VARCHAR(255)
  )
`).then(() => {
    console.log('ð  Created table posts!');
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit();
  });
