const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', (req, res) => {

  db.query(`SELECT * FROM posts ORDER BY id DESC`)
    .then(posts => {
      // res.send(posts);
      res.render('posts/index', {posts})
    })
    .catch(err => { res.send(err); });
});

router.get('/new', (req, res) => {
  res.render('posts/new')
})

router.post('/', (req, res, next) => {
  const post = req.body

  db.query(`
    INSERT INTO posts (title, content, author)
    VALUES ($<title>, $<content>, $<author>)
  `, post).then(()=>{
    res.redirect('/posts')
  })
})





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
