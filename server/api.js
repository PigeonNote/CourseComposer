const express = require('express');

// Is this getting called in server.js?
const pigeonController = require('./controllers/pigeonController');

const router = express.Router();

router.get('/',
  pigeonController.getCharacters,
  (req, res) => res.status(200).json(res.locals.characters)
);

router.get('/species',
  pigeonController.getSpecies,
  (req, res) => res.status(200).json(res.locals.speciesInfo)
);


module.exports = router;
