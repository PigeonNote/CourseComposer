// const db = require('../models/pigeonModels');

const courseController = {};

courseController.createCourse = (req, res, next) => {
  // destruct object
  try {
    console.log('createCourse');
    return next();
  } catch (err) {
    // if there is an err, return the errorObj to the global error handler
    return next({
      log: 'Error Express - courseController.createCourse',
      status: 500,
      message: { err },
    });
  }
};

courseController.deleteCourse = (req, res, next) => {
  // destruct object
  try {
    console.log('deleteCourse');
    return next();
  } catch (err) {
    // if there is an err, return the errorObj to the global error handler
    return next({
      log: 'Error Express - courseController.deleteCourse',
      status: 500,
      message: { err },
    });
  }
};

courseController.getCourse = (req, res, next) => {
  // destruct object
  try {
    console.log('getCourse');
    return next();
  } catch (err) {
    // if there is an err, return the errorObj to the global error handler
    return next({
      log: 'Error Express - courseController.getCourse',
      status: 500,
      message: { err },
    });
  }
};

courseController.updateCourse = (req, res, next) => {
  // destruct object
  try {
    console.log('updateCourse');
    return next();
  } catch (err) {
    // if there is an err, return the errorObj to the global error handler
    return next({
      log: 'Error Express - courseController.updateCourse',
      status: 500,
      message: { err },
    });
  }
};

module.exports = courseController;
