const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

const User = require('../models/UserModel');

userRouter.post('/signup', userController.signUp, (req, res) => {
  res.status(200).json(res.locals.newUser);
});

userRouter.get('/', userController.getUsers, (req, res) => {
  res.status(200).send(res.locals.users);
});

userRouter.post('/login', userController.login, (req, res) => {
  res.status(200).send(res.locals.loginToken);
});

userRouter.get('/trips', userController.isLoggedIn, (req, res) =>
  res.status(200).send('logged in')
);

module.exports = userRouter;
