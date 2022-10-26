import axios from 'axios';
import React, { useState } from 'react';
import Button from './components/Button'
function Login(props) {
//   const [values, setValues] = useState(
//     {
//     email:'',
//     password:''
// });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    // const loginForm = document.getElementById('loginform')
    // const formData = new FormData(loginForm);
    const formData = {email: email, password: password};
    console.log("login data", formData)
  }
  axios.post('/api/users/login', formData)
  .then(response => {
    if (response.status === 200) console.log("logged in successfully")
  .catch(error => {
    console.log('error loging in ')
  })
  })
  return (
    <div className="logindiv">
      <form id="loginform">
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

        
        <Button  className="login-btn" text='Log In' onClick={handleSubmit}/>
          
      

      </form>

    </div>
  );
}
export default Login;
