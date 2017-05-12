const db = require('./index');
const f = require('faker');

const QTY = 50;
for (let i = 0; i < QTY; i += 1) {
  const title = `${f.hacker.adjective()} ${f.hacker.noun()}`;
  const content = f.hacker.phrase();
  const author = `${f.name.firstName()} ${f.name.lastName()}`;

  db.query(`
    INSERT INTO posts (title, content, author)
    VALUES ($<title>, $<content>, $<author>);
    `, { title, content, author }).then(() => {
      console.log(`ð¨ Create ${title}`);
      if (i >= QTY - 1) process.exit();
    });
}
