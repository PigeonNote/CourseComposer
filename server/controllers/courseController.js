const db = require('../models/pigeonModels');

const courseController = {};

courseController.createCourse = async (req, res, next) => {
  // INSERT INTO courses ( title, info, username ) VALUES ($1, $2, $3) RETURNING *;
  // destruct object
  const { title, info, username } = req.body;
  const query = {
    text: 'INSERT INTO courses ( title, info, username ) VALUES ($1, $2, $3) RETURNING course_id;',
    values: [title, info, username]
  };
  const courseId = await db.query(query); 
  console.log('this is course id:', courseId);
  
  // join tables
  'SELECT * FROM accounts LEFT OUTER JOIN courses ON accounts.courses = account'

  // append to user's course array in account table
  const updateCourseQuery = {
    text: 'UPDATE accounts SET courses = (SELECT courses FROM accounts WHERE username = $2) || ARRAY[$1] WHERE username = $2;',
    values: [courseId, username]
  };
  try {
    await db.query(updateCourseQuery);
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

courseController.getCourse = async (req, res, next) => {
  // destruct object
  const { username } = req.params;
  // console.log('username: ', username);
  try {
    const query = {
      text: 'select * from courses where username = $1 return *;',
      values: [username]
    };

    const userInfo = await db.query(query);

    // console.log('userInfo: ', userInfo);

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
