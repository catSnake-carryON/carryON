import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import '../styling/signup/signup.scss'

const Signup = ({
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  //maybe make a state that when user signs up
  //popup that they have successfully signed up?
  //clear state
  const server = axios.create({
    baseURL: 'http://localhost:3000/',
  });

  const navigate = useNavigate();

  const createUserHandler = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      username: username,
      password: password,
    };
    console.log('user data', userData);
    server
      .post('/signup', userData)
      // .then((res) => console.log('I am the res', res))
      .then((res) => {
        // console.log('I am the res', data)
        // if res = str, alert that they already have account
        //alert: you have successfully signed up
        if(typeof res.data === 'string') {
          alert(res.data) 
          navigate('/Login')
        }
        else {
          alert('You have successfully signed up~')
          navigate('/Login')
        }
        // console.log('I am the res', res)
      })
      .catch((err) => {
        console.error(err);
      });
    setEmail('');
    setUsername('');
    setPassword('');
  };

  return (
    <div id='signup-div'>
      <h1 id='signup-title'>Welcome to carryON</h1>
      <div id='signup-box'>
        <form>
          <section className='signup-section'>
            <label>Email:</label>
            <input
              name='email'
              type='text'
              className='signup-input'
              placeholder='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </section>
          <section className='signup-section'>
            <label>Username:</label>
            <input
              name='username'
              type='text'
              placeholder='username'
              className='signup-input'
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </section>
          <section className='signup-section'>
            <label>Password:</label>
            <input
              name='password'
              type='password'
              placeholder='password'
              className='signup-input'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </section>
        </form>
        <button id='signup-button' text='signup' type='submit' onClick={createUserHandler}>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;

// function validateForm() {
//   return email.length > 0 && password.length > 0 && username.length > 0;
// }
// function handleSubmit(event) {
//   event.preventDefault();
//   // const loginForm = document.getElementById('loginform')
//   // const formData = new FormData(loginForm);
//   const formData = { email: email, password: password };
//   console.log('sign Up data', formData);
// }

// return (props.trigger) ? (

//   <div className="signup">
//     <div className="signup-inner">
//     <br />
//       <form>
//         <div className="form-group text-left">
//           <label />
//           <input name = 'email' placeholder="Enter email" value={email} onChange={e => {setEmail(e.target.value)}}/>
//         </div>
//         <br />
//         <div className="form-group text-left">
//           <label />
//           <input name='password' placeholder="Password" value={password} onChange={e => {setPassword(e.target.value)}}/>
//         </div>
//         <br />

//         <Button className="signupinner-btn" text='Sign Up!' onClick={handleSubmit}>
//           Sign Up!
//         </Button>

//       </form>
//       <button className='close-signup' onClick={() => props.setTrigger(false)}>close</button>
//       {props.children}
//     </div>

//   </div>
// ) : '';
