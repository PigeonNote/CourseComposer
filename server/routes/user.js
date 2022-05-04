const express = require('express');

// Is this getting called in server.js?
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', userController.createUser, (req, res) =>{
  res.sendStatus(200);
});

router.delete('/:account_id', userController.deleteUser, (req, res) =>
  res.sendStatus(200)
);

router.post('/login', userController.getUser, (req, res) =>
  res.sendStatus(200)
);

router.patch('/', userController.updateUser, (req, res) =>
  res.sendStatus(200)
);

module.exports = router;
