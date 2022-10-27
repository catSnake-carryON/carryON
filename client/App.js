import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
// import components";
import Login from './components/Login';
import Signup from './components/Signup';
import MainDisplay from './components/MainDisplay';
import TripDetailsForm from './components/TripDetailsForm.js';
import axios from 'axios';
import './styling/sitewide.scss';
let navbarImg = require('./assets/navbar-img.png');
//main container
//routers
function App() {
  // const [signupButton, setSignupButton] = useState(false)
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [depDate, setDepDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const server = axios.create({
    baseURL: 'http://localhost:3000/',
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log('button clicked!');
    server
      .get('/')
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <nav id='navbar'>
        <section id='left-nav'>
          <img id='navbarImg' src={navbarImg.default} />
        </section>
        <section id='right-nav'>
          <Link to='/Login'>
            <button id='login-btn' className='nav-btns'>
              Log in
            </button>
          </Link>
          <Link to='/Signup'>
            <button id='signup-btn' className='nav-btns'>
              Sign up
            </button>
          </Link>
        </section>
      </nav>
      <Routes>
        <Route
          path='/'
          element={
            <TripDetailsForm
              setName={setName}
              setDestination={setDestination}
              destination={destination}
              setDepDate={setDepDate}
              setReturnDate={setReturnDate}
            />
          }
        />
        <Route
          path='/Login'
          element={
            <Login
              setEmail={setEmail}
              setPassword={setPassword}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        <Route
          path='/Signup'
          element={
            <Signup
              setEmail={setEmail}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          }
        />
        <Route
          path='/MainDisplay'
          element={
            <MainDisplay
              name={name}
              destination={destination}
              depDate={depDate}
              returnDate={returnDate}
            />
          }
        />
      </Routes>
    </>
    // <div>
    //   <PackingList />
    // </div>
  );
}
export default App;

// {/* <div className="App">
//       <main id='title'>
//         <h1>Welcome to carryON!</h1>
//         <br />
//         <button onClick={handleClick}>Testing Backend</button>
//         <button onClick = {() => setSignupButton(true)}>Sign Up!</button>
//         {/* <Signup trigger={signupButton} setTrigger={setSignupButton}>
//         {/* </Signup>
//       </main>
//       <div>
//         {/* <TripContainer></TripContainer>
//     </div>
//     </div> */}
