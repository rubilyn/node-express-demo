const express = require('express');
const router = express.Router();


//req is shorthand for request
//res for response
router.get('/',(req, res) =>{
  res.render('index');
});


//when this file will be required, it will return the
//object assigned to module.exports
//(in this case, the router object)
module.exports = router;
