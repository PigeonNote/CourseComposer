const db = require('../models/pigeonModels');

const pigeonController = {};

// starWarsController.getCharacters = (req, res, next) => {
//   // write code here
//   //const myQ = 'SELECT * FROM "public"."people"';
//   const myQ = `SELECT pe.*, pl.name AS homeworld, sp.name AS species
//               FROM people pe 
//               LEFT OUTER JOIN planets pl
//               ON pe.homeworld_id = pl._id
//               LEFT OUTER JOIN species sp
//               ON pe.species_id = sp._id;`;

//   db.query(myQ)
//     //.then(data => data.json())
//     .then(data => {
//       //console.log(data);
//       res.locals.characters = data.rows;
//       next();
//     })
//     .catch(err => {
//       const defaultErr = {
//         log: 'starWarsController.getCharacters',
//         message: { err: 'super bummed on your error bro' }
//       };
//       return next(defaultErr);
//     });
// };

// starWarsController.getSpecies = (req, res, next) => {
//   // write code here
//   const id = req.query.id;
//   const value = [id];
//   const myQ = `SELECT sp.name, sp.language, sp.classification, sp.average_height, sp.average_lifespan, pl.name AS homeworld
//                 FROM species sp
//                 LEFT OUTER JOIN planets pl
//                 ON sp.homeworld_id = pl._id
//                 WHERE sp._id = ${id};`; // Selecting ONLY one row (species: human, jawa, droid)
//   db.query(myQ)
//     .then(data => {
//       res.locals.speciesInfo = data.rows[0];
//       console.log(data.rows);
//       next();
//       return;
//     })
//     .catch(err => {
//       const defaultErr = {
//         log: 'starWarsController.getSpecies',
//         message: { err: 'super bummed on your error bro' }
//       };
//       return next(defaultErr);
//     });
// };

// starWarsController.getHomeworld = (req, res, next) => {
//   // write code here
//   const id = req.query.id;
//   const myQ = `SELECT * FROM planets WHERE planets._id = ${id};`;
//   db.query(myQ)
//     .then(data => {
//       res.locals.homeworldInfo = data.rows[0];
//       console.log(data.rows);
//       next();
//       return;
//     })
//     .catch(err => {
//       const defaultErr = {
//         log: 'starWarsController.getHomeworld',
//         message: { err: 'super bummed on your error bro' }
//       };
//       return next(defaultErr);
//     });
// };

// starWarsController.getFilm = (req, res, next) => {
//   // write code here

//   next();
// };

// starWarsController.addCharacter = (req, res, next) => {
//   // write code here
//   const b = req.body;
//   //const values = [b.name, b.mass, b.hair_color, b.skin_color, b.eye_color, b.birth_year, b.gender, b.species_id, b.homeworld_id, b.height];
//   const myQ = 'INSERT INTO people (name, mass, hair_color, skin_color, eye_color, birth_year, gender, species_id, homeworld_id, height) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);';
//   const values = [b.name, b.mass, b.hair_color, b.skin_color, b.eye_color, b.birth_year, b.gender, b.species_id, b.homeworld_id, b.height];
//   //VALUES (${b.name}, ${b.mass}, ${b.hair_color}, ${b.skin_color}, ${b.eye_color}, ${b.birth_year}, ${b.gender}, ${b.species_id}, ${b.homeworld_id}, ${b.height});`;
//   db.query(myQ, values)
//     .then(data => {
//       res.locals.newCharacter = data.rows[0];
//       next();
//       return;
//     })
//     .catch(err => {
//       const defaultErr = {
//         log: 'starWarsController.addCharacter',
//         message: { err: 'super bummed on your error bro' }
//       };
//       return next(defaultErr);
//     });
// };

module.exports = pigeonController;
