import React from "react";
import ReactDom from "react-dom";
import {useState} from 'react';
import Signup from "./Signup";
import Login from "./Login";
import TripContainer from './containers/TripContainer'

function App (){
  const [signupButton, setSignupButton] = useState(false)

    return (
<div className="App">
      <main>
        <h1>Welcome to the travel packing App !</h1>
        <br /><br />
        <Login className="login"></Login>
        <br />
        <button onClick = {() => setSignupButton(true)}>Sign Up!</button>
        <Signup trigger={signupButton} setTrigger={setSignupButton}> 
        </Signup> 
      </main>
      <div> 
        <TripContainer></TripContainer>
    </div>
    </div>

    )
}
export default App;
