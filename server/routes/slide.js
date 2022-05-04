const express = require('express');

// Is this getting called in server.js?
const slideController = require('../controllers/slideController');

const router = express.Router();

router.post('/', slideController.createSlide, (req, res) =>
  res.status(200).json(res.locals.createdSlide));

router.delete('/:slide_id', slideController.deleteSlide, (req, res) =>
  res.sendStatus(200));

router.get('/:course_id', slideController.getSlide, (req, res) =>
  res.status(200).json(res.locals.allSlides));

router.patch('/', slideController.updateSlide, (req, res) =>
  res.status(200).json(res.locals.newSlide));

module.exports = router;
