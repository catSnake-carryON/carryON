import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import '../styling/login/login.scss'

const Login = ({
  email,
  setEmail,
  password,
  setPassword,
  username,
  setUsername,
  loggedIn,
  setLoggedIn
}) => {
  const server = axios.create({
    baseURL: 'http://localhost:3000/',
  });

  const navigate = useNavigate();

  //test login and signup
  const loginHandler = (e) => {
    e.preventDefault();
    const login = { email: email, password: password };
    console.log('login data', login);

    //when login is authenticated: change loggedIn state to true
    server
      .post('/login', login)
      // .then((res) => console.log(res))
      .then((res) => {
        console.log(res);
        if (typeof res.data.result === 'string') {
          alert(res.data.result);
        }
        else {
          setLoggedIn(true);
          setUsername(res.data.user.username)
          navigate('/');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div id='login-div'>
      <h1 id='login-title'>Welcome back</h1>
      <div id='login-box'>
        <form>
          <section className='login-section'>
            <label>Email:</label>
            <input
              name='email'
              type='text'
              className='login-input'
              placeholder='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </section>
          <section className='login-section'>
            <label>Password:</label>
            <input
              name='password'
              type='password'
              className='login-input'
              placeholder='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </section>
        </form>
        <button id='login-button' onClick={loginHandler}>Log in</button>
      </div>
    </div>
  );
};

export default Login;

