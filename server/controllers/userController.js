const db = require('../models/pigeonModels');
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
    // res.locals.hash = hash;

  });
  // query string
  const query =
    'INSERT INTO accounts (username, password, email) VALUES ($1, $2, $3) RETURNING *';
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

userController.getUser = async(req, res, next) => {
  const { username, password } = req.body;
  console.log('did i get to the controller for login ?')
  
  // query db for password under givne username
  const query = `SELECT password FROM accounts WHERE id = ${username}`;
  const hash = await (db.query(query));

  // validate password
  bcrypt.compare(password, hash, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(res);
  });
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
