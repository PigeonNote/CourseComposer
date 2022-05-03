const db = require('../models/pigeonModels');

const courseController = {};

courseController.createCourse = async (req, res, next) => {
  // INSERT INTO courses ( title, info, username ) VALUES ($1, $2, $3) RETURNING *;
  // destruct object
  const { title, info, username } = req.body;
  const query = {
    text: 'INSERT INTO courses ( title, info, username ) VALUES ($1, $2, $3) RETURNING *;',
    value: [title, info, username]
  };
  // Get existing account courses
  const getAccCrsQuery = {
    text: 'INSERT INTO courses ( title, info, username ) VALUES ($1, $2, $3) RETURNING *;',
    value: [title, info, username]
  };
  // append to user's course array in account table
  // UPDATE accounts SET courses = $1 WHERE username = $2;
  try {
    res.locals.course = await db.query(query);
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
