const express = require('express');

// Is this getting called in server.js?
const slideController = require('../controllers/slideController');

const router = express.Router();

router.post('/add', slideController.createslide, (req, res) =>
  res.status(200).json(res.locals.createdslide));

router.delete('/delete', slideController.deleteslide, (req, res) => res.status(200));

router.get('/:username', slideController.getslide, (req, res) =>
  res.status(200).json(res.locals.userslides));

router.patch('/patch', slideController.updateslide, (req, res) => res.status(200));

module.exports = router;
