const db = require('../models/pigeonModels');

const slideController = {};

slideController.createSlide = async (req, res, next) => {
  // destruct object
  const { video, text, course_id } = req.body;
  console.log('req.body: ', req.body);
  const query = {
    text: 'INSERT INTO slides ( video, text, course_id ) VALUES ($1, $2, $3) RETURNING *;',
    values: [video, text, course_id]
  };
  
  try {
    const newSlide = await db.query(query); 
    console.log('newSlide: ', newSlide);
    const { slide_id } = newSlide.rows[0];
    res.locals.createdSlide = {...newSlide.rows[0]};
    return next();
  } catch (err) {
    // if there is an err, return the errorObj to the global error handler
    return next({
      log: 'Error Express - slideController.createSlide',
      status: 500,
      message: { err },
    });
  }
};

slideController.deleteSlide = (req, res, next) => {
  // destruct object
  const { slide_id } = req.params;

  // query string
  const query = {
    text: 'DELETE FROM slides WHERE slide_id = $1',
    values: [slide_id]
  };

  try {
    const result = db.query(query);
    console.log('deleteSlide');
    return next();
  } catch (err) {
    // if there is an err, return the errorObj to the global error handler
    return next({
      log: 'Error Express - slideController.deleteSlide',
      status: 500,
      message: { err },
    });
  }
};

slideController.getSlide = async (req, res, next) => {
  // destruct object
  const { course_id } = req.params;
  console.log('course_id: ', course_id);
  try {
    const query = {
      text: 'SELECT * FROM slides WHERE course_id = $1;',
      values: [course_id]
    };
    
    const allSlides = await db.query(query);

    console.log('allSlides:', allSlides.rows);
    res.locals.allSlides = [...allSlides.rows];
    return next();
  } catch (err) {
    // if there is an err, return the errorObj to the global error handler
    return next({
      log: 'Error Express - slideController.getSlide',
      status: 500,
      message: { err },
    });
  }
};

slideController.updateSlide = async (req, res, next) => {
  // destruct object
  const { slide_id, video, text } = req.body;
  // query string for updating video and text
  try {
    const updateQuery = {
      text: 'UPDATE slides SET video = $2, text = $3 WHERE slide_id = $1 RETURNING *',
      values: [slide_id, video, text]
    };
    const newSlide = await db.query(updateQuery);
    res.locals.newSlide = newSlide.rows[0];

    console.log('updateSlide');
    return next();
  } catch (err) {
    // if there is an err, return the errorObj to the global error handler
    return next({
      log: 'Error Express - slideController.updateSlide',
      status: 500,
      message: { err },
    });
  }
};

module.exports = slideController;
