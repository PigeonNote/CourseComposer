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
      text: 'INSERT INTO accounts (username, password) VALUES ($1, $2) RETURNING *',
      values: [username, hash]
    };
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

userController.deleteUser = async(req, res, next) => {
  // destruct object
  const { account_id } = req.params;

  console.log('parseINT',parseInt(account_id, 10));

  const query = {
    text: 'DELETE FROM accounts WHERE account_id = $1',
    values: [parseInt(account_id, 10)]
  };
  try {
    const deleted = await db.query(query);
    console.log('deleted:', deleted);
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

userController.updateUser = async (req, res, next) => {
  const { username, oldpassword, newpassword } = req.body;
  const rounds = 10;
  // query db for password under given username
  const query = {
    text: 'SELECT password FROM accounts WHERE username = $1',
    values: [username]
  };
  const hash = await (db.query(query));
  await console.log('WE ARE COMPARING OLD PASSWORD W HASHED PASSWORD and this is old hashed pw', hash.rows[0].password);
  bcrypt.compare(oldpassword, hash.rows[0].password, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('THIS IS RES FROM COMPARING BCRYPT', res);
  
    // some conditional to check whether res is truthy--if so, proceed to has newpassword???
    if (res === true) {
      bcrypt.hash(newpassword, rounds, async (err, hash) => {
        if (err) {
          console.log(err);
          return;
        }
        try {
          console.log('THIS IS HASH OF NEW PW', hash);
          const updatePasswordQuery = {
            text: 'UPDATE accounts SET password = $1 WHERE username = $2 RETURNING *',
            values: [hash, username]
          };
          const result = await db.query(updatePasswordQuery);
          console.log('THIS IS RESULT', result);
          console.log('result: ', result);
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
      });
    }
  });
};

module.exports = userController;
