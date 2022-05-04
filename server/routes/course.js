const express = require('express');

// Is this getting called in server.js?
const courseController = require('../controllers/courseController');

const router = express.Router();

router.post('/add', courseController.createCourse, (req, res) =>
  res.status(200).json(res.locals.createdCourse));

router.delete('/:course_id', courseController.deleteCourse, (req, res) => res.status(200).json(res.locals.slides));

router.get('/:username', courseController.getCourse, (req, res) =>
  res.status(200).json(res.locals.userCourses));

router.patch('/patch', courseController.updateCourse, (req, res) =>
  res.status(200).json(res.locals.updatedCourse));

module.exports = router;
