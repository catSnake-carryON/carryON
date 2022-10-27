const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const path = require('path');
const User = require('../models/UserModel');
const userController = {};
const { SECRET = 'secret' } = process.env;


userController.signUp = async (req, res, next) => {
  const { email, password } = req.body;
  console.log('signup middleware hit');
  try {
    const existingUser = await User.User.findOne({ email });
    if (!existingUser) {
      // hash the password
      req.body.password = await bcrypt.hash(req.body.password, 10);
      // create a new user
      const user = await User.User.create(req.body);
      // send new user as response
      res.locals.newUser = user;
      console.log(user);
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
  console.log('login middleware hit');
  const { email, password } = req.body;
  try {
    // check if the user exists
    const user = await User.User.findOne({ email });
    if (user) {
      console.log(user);
      // check if password matches
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        // sign token and send it in response (carryON this causes errors)
        // const token = jwt.sign(
        //   { email: user.email },
        //   process.env.ACCESS_TOKEN_SECRET
        // );
        res.locals.user = user;
        // res.locals.loginToken = { token };
        return next();
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

userController.getUser = async (req, res, next) => {
  console.log('in getUser');
  const { username } = req.body;
  try {
    const found = await User.User.findOne({ username: username });
    console.log(found.trips);
    res.locals.user = found;
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

// server.post('/saveList', {
//   username: username,
//   packingList: [{content: 'underwear',
//                   quanity: 1,
//                   packed: false}]
// })

userController.saveList = async (req, res, next) => {
  const { username, packingList, tripName } = req.body;
  console.log(req.body);
  const user = await User.User.findOne({ username: username });
  console.log('user found!');
  const newPackingList = new User.packingList({
    listOfPackingItems: packingList,
    tripName: tripName,
  });
  user.prevPackingLists.push(newPackingList);
  await newPackingList.save();
  await user.save();
  console.log('list saved!');
  res.locals.user = user;
  next();
};

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// google api key: AIzaSyCykpyAPQzrmS4sECtOywEAbOr2KpKg6mI
// google api request: https://maps.googleapis.com/maps/api/geocode/{outputFormat}?{parameters}
// outputFormat should be in JSON,

userControllerer.getWeather = async (req, res, next) => {};

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
          console.log('user Verified Logged In');
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
