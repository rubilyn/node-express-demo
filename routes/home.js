const express = require('express');
const router = express.Router();

// req is shorthand for request
// res is shorthand for response
// URL: http://localhost:4545/ VERB: Get
router.get('/', (req, res) => {
  res.render('index');
});

// URL: http://localhost:4545/contact VERB: Get
router.get('/contact', (req, res) => {
  res.render('contact', {fullName: '', email: '', comment: ''});
});

// URL: http://localhost:4545/contact VERB: Post
router.post('/contact',  (req, res) => {
  const params = req.body;
  params.fullName = "Dictator " + params.fullName;
  // {
  //   "fullName": "fafasdas",
  //   "email": "dasdas@dsadas.com",
  //   "comment": "dasdasdsa",
  //   "submit": "Submit"
  // }
  res.render('contact', params);
});

// when this file will be required, it will return the
// object assigned to module.exports
// (i.e. the router object)
module.exports = router;
