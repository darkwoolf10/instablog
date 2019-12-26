const express = require('express');
const connection = require('../db');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null,  Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('photo'), (req, res, next) => {
  const file = req.file;

  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }

  res.send(file);
});


// app.get('/photo/:id', (req, res) => {
//   var filename = req.params.id;
//
//   db.collection('mycollection').findOne({'_id': ObjectId(filename) }, (err, result) => {
//
//     if (err) return console.log(err)
//
//     res.contentType('image/jpeg');
//     res.send(result.image.buffer)
//
//
//   })
// })

module.exports = router;
