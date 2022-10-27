import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
// import components";
import Login from './components/Login';
import Signup from './components/Signup';
import MainDisplay from './components/MainDisplay';
import TripDetailsForm from './components/TripDetailsForm.js';
import ListContainer from './components/ListContainer';
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
  const [dailyWeatherArr, setDailyWeatherArr] = useState(null);

  return (
    <>
      <nav id='navbar'>
        <section id='left-nav'>
          <img id='navbarImg' src={navbarImg.default} />
        </section>
        <section id='right-nav'>
          {loggedIn === false ? (
            <Link to='/Login'>
              <button id='login-btn' className='nav-btns'>
                Log in
              </button>
            </Link>
          ) : (
            <p>hello user</p>
          )}
          {loggedIn === false ? (
            <Link to='/Signup'>
              <button id='signup-btn' className='nav-btns'>
                Sign up
              </button>
            </Link>
          ) : (
            <button>My Lists</button>
          )}
        </section>
      </nav>
      <div id='page-content'>
        <Routes>
          <Route
            path='/'
            element={
              <TripDetailsForm
                name={name}
                setName={setName}
                setDestination={setDestination}
                destination={destination}
                depDate={depDate}
                setDepDate={setDepDate}
                returnDate={returnDate}
                setReturnDate={setReturnDate}
                dailyWeatherArr={dailyWeatherArr}
                setDailyWeatherArr={setDailyWeatherArr}
              />
            }
          />
          <Route
            path='/Login'
            element={
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                username={username}
                setUsername={setUsername}
              />
            }
          />
          <Route
            path='/Signup'
            element={
              <Signup
                email={email}
                setEmail={setEmail}
                username={username}
                setUsername={setUsername}
                password={password}
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
                dailyWeatherArr={dailyWeatherArr}
                username={username}
                loggedIn={loggedIn}
              />
            }
          />
        </Routes>
      </div>
      {/* <div id='page-content'>
      <MainDisplay/>
      </div> */}
    </>
  );
}
export default App;


