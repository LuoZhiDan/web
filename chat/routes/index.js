var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

module.exports = router;