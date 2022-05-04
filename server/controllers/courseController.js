const db = require('../models/pigeonModels');

const courseController = {};

courseController.createCourse = async (req, res, next) => {
  // INSERT INTO courses ( title, info, username ) VALUES ($1, $2, $3) RETURNING *;
  // destruct object
  const { title, info, username } = req.body;
  const query = {
    text: 'INSERT INTO courses ( title, info, username ) VALUES ($1, $2, $3) RETURNING *;',
    values: [title, info, username]
  };
  
  try {
    const newCourse = await db.query(query); 
    const { courseID } = newCourse.rows[0];
    res.locals.createdCourse = {...newCourse.rows[0]};
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

courseController.deleteCourse = async (req, res, next) => {
  // destruct object

  const { course_id } = req.params;
  
  console.log('course_id: ', req.params);

  try {
    const query = {
      text: 'DELETE FROM courses WHERE course_id = $1;',
      values: [course_id]
    };

    await db.query(query);

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
  
  const { username } = req.params;
  console.log('username: ', username);
  try {
    const query = {
      text: 'SELECT * FROM courses WHERE username = $1;',
      values: [username]
    };
    
    const userInfo = await db.query(query);

    // console.log('userinfo:', userInfo.rows);
    res.locals.userCourses = [...userInfo.rows];
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

courseController.updateCourse = async (req, res, next) => {

  const { course_id, title, info } = req.body;
  // destruct object
  try {
    const query = {
      text: 'UPDATE courses SET title = $1, info = $2 WHERE course_id = $3 RETURNING *',
      values: [ title , info, course_id ]
    };

    const result = await db.query(query);

    console.log('results: ', result.rows[0]);
    res.locals.updatedCourse = result.rows[0];
    
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
