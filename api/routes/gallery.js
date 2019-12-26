var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([
    {
      url: 'https://picsum.photos/540/300/?blur',
      description: "test 1"
    },
    {
      url: 'https://picsum.photos/540/300/?blur',
      description: "test 2"
    },
    {
      url: 'https://picsum.photos/320/300/?blur',
      description: "test 3"
    },
    {
      url: 'https://picsum.photos/200/300/?blur',
      description: "test 4"
    },
    {
      url: 'https://picsum.photos/200/300/?blur',
      description: "test 5"
    }
  ]);
});

module.exports = router;
