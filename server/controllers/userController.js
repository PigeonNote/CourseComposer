// const db = require('../models/pigeonModels');
const bcrypt = require('bcrypt');

const userController = {};

userController.createUser = (req, res, next) => {
  // destruct object
  const { username, password, email } = req.body;
  const rounds = 10;
  bcrypt.hash(password, rounds, (err, hash) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(hash);
    res.locals.hash = hash;
  });
  
  // query string

  try {
    console.log('createUser');
    return next();
  } catch (err) {
    // if there is an err, return the errorObj to the global error handler
    return next({
      log: 'Error Express - userController.createUser',
      status: 500,
      message: { err },
    });
  }
};

userController.deleteUser = (req, res, next) => {
  // destruct object
  try {
    console.log('deleteUser');
    return next();
  } catch (err) {
    // if there is an err, return the errorObj to the global error handler
    return next({
      log: 'Error Express - userController.deleteUser',
      status: 500,
      message: { err },
    });
  }
};

userController.getUser = (req, res, next) => {
  // destruct object
  try {
    console.log('getUser');
    return next();
  } catch (err) {
    // if there is an err, return the errorObj to the global error handler
    return next({
      log: 'Error Express - userController.getUser',
      status: 500,
      message: { err },
    });
  }
};

userController.updateUser = (req, res, next) => {
  // destruct object
  try {
    console.log('updateUser');
    return next();
  } catch (err) {
    // if there is an err, return the errorObj to the global error handler
    return next({
      log: 'Error Express - userController.updateUser',
      status: 500,
      message: { err },
    });
  }
};

module.exports = userController;
