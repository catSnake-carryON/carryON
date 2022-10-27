import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = ({
  email,
  setEmail,
  password,
  setPassword,
  username,
  setUsername,
  loggedIn,
  setLoggedIn,
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
        // if (res.data === true) {
        //   setLoggedIn(true);
        //   navigate('/');
        // }
        // else {
        //   alert(res.data);
        // }
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
    //where should we route a logged in user?
    // navigate('/MyTrips');
  };

  return (
    <div className='loginDiv'>
      <h1>Hey I am login</h1>
      <label>Email:</label>
      <input
        name='email'
        type='text'
        placeholder='email'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>Password:</label>
      <input
        name='password'
        type='text'
        placeholder='password'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={loginHandler}>Log in</button>
    </div>
  );
};

export default Login;

//   const [values, setValues] = useState(
//     {
//     email:'',
//     password:''
// });
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// function validateForm() {
//   return email.length > 0 && password.length > 0;
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   // const loginForm = document.getElementById('loginform')
//   // const formData = new FormData(loginForm);
//   const formData = {email: email, password: password};
//   console.log("login data", formData)
// }
// axios.post('/api/users/login', formData)
// .then(response => {
//   if (response.status === 200) console.log("logged in successfully")
// .catch(error => {
//   console.log('error loging in ')
// })
// })

/* <form id="loginform">
    <div className="form-group text-left">
    <label></label>
    <input name = 'email' placeholder="Enter email" value={email} onChange={e => {setEmail(e.target.value)}}/>
    </div>
    <br></br>
    <div className="form-group text-left">
    <label></label>
    <input name='password' placeholder="Password" value={password} onChange={e => {setPassword(e.target.value)}}/>
    </div> 
    <br></br>
    {/* <Button  className="login-btn" text='Log In' onClick={handleSubmit}/> */
