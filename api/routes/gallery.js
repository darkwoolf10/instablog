var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/gallery', function(req, res, next) {
  res.json({ message: 'WELCOME' });
});

module.exports = router;