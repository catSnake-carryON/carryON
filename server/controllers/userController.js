const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const path = require('path');
const User = require('../models/UserModel');

const userController = {};
// const { SECRET = 'secret' } = process.env;

userController.signUp = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      // hash the password
      req.body.password = await bcrypt.hash(req.body.password, 10);
      // create a new user
      const user = await User.create(req.body);
      // send new user as response
      res.locals.newUser = user;
    } else {
      res.sendFile(path.resolve(__dirname, '../client/login.html'));
    }
    return next();
  } catch (error) {
    return next({
      err: {
        log: `Error in userController.createUser: ${error}`,
        status: 413,
        message: { err: 'error in usercontroller.signup' },
      },
    });
  }
};

// eslint-disable-next-line consistent-return
userController.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // check if the user exists
    const user = await User.findOne({ email });
    if (user) {
      // check if password matches
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        // sign token and send it in response
        const token = await jwt.sign(
          { email: user.email },
          process.env.ACCESS_TOKEN_SECRET
        );
        res.locals.loginToken = { token };
        next();
      } else {
        res.status(400).alert('Incorrect Password, Try Again');
      }
    } else {
      res.sendFile(path.resolve(__dirname, '../client/signup.html'));
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

userController.getUsers = async (req, res, next) => {
  try {
    const found = await User.find({});
    console.log(found);
    res.locals.users = found;
    return next();
  } catch (error) {
    return next({
      log: `userController.getUsers: ERROR ${error}`,
      message: {
        err: 'User not found',
      },
    });
  }
};

userController.isLoggedIn = async (req, res, next) => {
  try {
    // check if auth header exists
    if (req.headers.authorization) {
      // parse token from header
      const token = req.headers.authorization.split(' ')[1]; // split the header and get the token
      if (token) {
        const payload = await jwt.verify(
          token,
          process.env.ACCESS_TOKEN_SECRET,
          (err, user) => {
            if (err) return res.status(403);
            req.user = user;
            next();
          }
        );
        if (payload) {
          // store user data in request object
          req.user = payload;
          next();
        } else {
          res.status(401).json({ error: 'token verification failed' });
        }
      } else {
        res.status(400).json({ error: 'malformed auth header' });
      }
    } else {
      res.status(400).json({ error: 'No authorization header' });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = userController;
