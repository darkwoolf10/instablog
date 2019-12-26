var express = require('express');
var router = express.Router();
const Photo = require('../models/photo');

router.get('/', async (req, res) => {
  try {
    const photos = await Photo.find();

    await res.json(photos);
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

module.exports = router;
