import React, { useState } from 'react';

function Signup(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0 && username.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    // const loginForm = document.getElementById('loginform')
    // const formData = new FormData(loginForm);
    const formData = {email: email, password: password};
    console.log("sign Up data", formData)
  }

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
  return (
    <div>
      <h1>Hi I am signup</h1>
    </div>
  )
}

export default Signup;
