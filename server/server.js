const express = require('express');
//const dotenv = require('dotenv').config();
// const colors = require('colors');
const path = require('path');
// const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
//const tripRouter = require('./routes/tripRouter');
const userRouter = require('./routes/userRouter');
const userController = require('./controllers/userController');
const cors = require('cors');
const port = 3000;

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// // request headers for external api access
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", 'https://localhost:8080/'); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.status(200);
//   next();
// });

app.use('/dist', express.static(path.join(__dirname, '../dist')));

// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
// });

//testing backend
app.get('/', (req, res) => {
  console.log('you are in the server')
  res.status(200).send('hello! you are connected :)');
});

app.post('/saveList', userController.saveList, (req, res) => {
  console.log('server hit')
  console.log(res.locals.user)
  res.status(201).send("hello from server");
}) 

app.post('/signup', userController.signUp, (req, res) => {
  console.log('server hit')
  console.log(res.locals.user)
  res.send('hello from server');
})

app.post('/login', userController.login, (req, res) => {
  res.send('hello from server');
})

//assumes checking for logged in status on frontend before sending req

// app.use('/api/trips', tripRouter);
// app.use('/api/users', userRouter);


// server.post('/saveList', {
//   username: username,
//   packingList: [{content: 'underwear',
//                   quanity: 1,
//                   packed: false}]
// })






app.use((req, res) => res.status(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error has occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server up and listening on port ${port}`));
