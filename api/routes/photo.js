const express = require('express');
const connection = require('../db');
const router = express.Router();
const multer = require('multer');
const Photo = require('../models/photo');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null,  Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('photo'), async (req, res, next) => {
  const file = req.file;

  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }

  try {
    const photo = new Photo({
      url: 'http://localhost:9000/static/uploads/' + file.filename,
      description: req.body.description
    });

    const newPhoto = await photo.save();
    res.status(201).json(newPhoto)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
});

router.post('/delete', async (req, res) => {
  try {
    const photo = await Photo.find({ '_id':  req.body.id}).remove().exec();
    res.send('Photo deleted');
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

router.get('/:id', (req, res) => {
  const filename = req.params.id;
  const img = fs.readFileSync();
  res.writeHead(200, {'Content-Type': 'image/gif' });
  res.send(img, 'binary');
});

module.exports = router;
