const express = require('express');

// Is this getting called in server.js?
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', userController.createUser, (req, res) =>
  res.status(200).json(res.locals.hash)
);

router.delete('/delete', userController.deleteUser, (req, res) =>
  res.status(200)
);

router.post('/login', userController.getUser, (req, res) =>
  res.status(200)
);

router.patch('/update', userController.updateUser, (req, res) =>
  res.status(200)
);

module.exports = router;
