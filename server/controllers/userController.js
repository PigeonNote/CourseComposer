const db = require('../models/pigeonModels');
const bcrypt = require('bcrypt');

const userController = {};

userController.createUser = async (req, res, next) => {
  // destruct object
  const { username, password } = req.body;
  const rounds = 10;
  // let hashPassword = 0;
  bcrypt.hash(password, rounds, async (err, hash) => {
    if (err) {
      console.log(err);
      return;
    }
    const query = {
      text: 'INSERT INTO accounts (username, password) VALUES ($1, $2)',
      values: [username, hash]
    }
    try {
      const result = await db.query(query);
      console.log('result: ', result);
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
  });
};

// userController.deleteUser = (req, res, next) => {
//   // destruct object
//   const { username } = req.body;
//   try {
//     console.log('deleteUser');
//     return next();
//   } catch (err) {
//     // if there is an err, return the errorObj to the global error handler
//     return next({
//       log: 'Error Express - userController.deleteUser',
//       status: 500,
//       message: { err },
//     });
//   }
// };

// LOG-IN verify password when user logs in
userController.getUser = async(req, res, next) => {
  const { username , password } = req.body;

  // query db for password under given username
  const query = {
    text: 'SELECT password FROM accounts WHERE username = $1',
    values: [username]
  };
  // console.log('before hash')
  const hash = await (db.query(query));
  // console.log("!!!!hash: ", hash);

  // validate password
  bcrypt.compare(password, hash.rows[0].password, (err, res) => {
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

// userController.updateUser = (req, res, next) => {
//   // destruct object
//   try {
//     console.log('updateUser');
//     return next();
//   } catch (err) {
//     // if there is an err, return the errorObj to the global error handler
//     return next({
//       log: 'Error Express - userController.updateUser',
//       status: 500,
//       message: { err },
//     });
//   }
// };

module.exports = userController;
