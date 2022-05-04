const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

const userRouter = require('./routes/user.js');
const courseRouter = require('./routes/course.js');

const PORT = 3000;
///
/**
 * handle parsing request body
 */
app.use(cors({credentials: true, origin: 'http://localhost:8080'}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../client/style')));

/**
 * ROUTES
*/
// USER
app.use('/user', userRouter);
// app.use('/signup', userRouter);
// // DELETE USER
// app.use('/delete', userRouter);
// // LOGIN
// app.use('/login', userRouter);
// // UPDATE LOGIN
// app.use('/update', userRouter);

// COURSE
app.use('/course', courseRouter);

// SlIDES
app.use('/slide', courseRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;