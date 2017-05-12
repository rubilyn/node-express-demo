const express = require('express');
const router = express.Router();
const db = require('../db');

// URL: /posts VERB: GET ACTION: Read
router.get('/', (req, res) => {

  db.query(`SELECT * FROM posts ORDER BY id DESC`)
    .then(posts => {
      // res.send(posts);
      res.render('posts/index', {posts})
    })
    .catch(err => { res.send(err); });
});

// URL: /posts/:id VERB: GET ACTION: Read
router.get('/:id', (req, res) => {
  const {id} = req.params;
  db.one(`SELECT * FROM posts WHERE id=$<id> LIMIT 1`, {id})
    .then(post => {
      // res.send(post)
      res.render('posts/show', {post});
    })
    .catch(err => { res.send(err); })
  // db.query(`SELECT * FROM posts WHERE id=$<id>`, {id})
  //   .then(post => {
  //     res.render('posts/show', {post});
  //   })
  //   .catch(err => { res.send(err); })
});

module.exports = router;
