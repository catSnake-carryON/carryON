import axios from 'axios';
import React, { useState } from 'react';

const Login = ({
  email,
  setEmail,
  password,
  setPassword,
  loggedIn,
  setLoggedIn,
}) => {
  const server = axios.create({
    baseURL: 'http://localhost:3000/',
  });

  //test login and signup
  const loginHandler = (e) => {
    e.preventDefault();
    const login = { email: password, password: password };
    console.log('login data', login);

    //when login is authenticated: change loggedIn state to true
    server
      .post('/login', login)
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });
    //where should we route a logged in user?
    // navigate('/MyTrips');
  };

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
  return (
    <div className='loginDiv'>
      <h1>Hey I am login</h1>
      <label>Email:</label>
      <input name='email' type='text' placeholder='email' />
      <label>Password:</label>
      <input name='password' type='text' placeholder='password' />
      <button onClick={loginHandler}>Log in</button>
    </div>
  );
  {
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
  }
};
export default Login;
