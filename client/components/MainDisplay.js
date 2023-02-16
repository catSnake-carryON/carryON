import React, { useState } from 'react';
import AddItemForm from './AddItemForm';
import ListContainer from './ListContainer';
import Weather from './Weather';
import axios from 'axios';
import '../styling/main-display/main-display.scss'

const MainDisplay = ({
  loggedIn,
  name,
  destination,
  depDate,
  returnDate,
  dailyWeatherArr,
  username,
}) => {
  console.log('your daily weather array', dailyWeatherArr);
  const [itemInput, setItemInput] = useState('');
  const [arrOfItems, setArrOfItems] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(1);

  const server = axios.create({
    baseURL: 'http://localhost:3000/',
  });


  return (
    <div id='main-display-layout'>
      <div className='tripDetails'>
        <h1 id='trip-title'>{name}</h1>
        <p className=''>Where: {destination}</p>
        <p>Departure: {depDate}</p>
        <p>Return: {returnDate}</p>
      </div>
      <AddItemForm
        id='add-item'
        itemInput={itemInput}
        setItemInput={setItemInput}
        arrOfItems={arrOfItems}
        setArrOfItems={setArrOfItems}
        itemQuantity={itemQuantity}
        setItemQuantity={setItemQuantity}
      />
      <ListContainer
        id='list'
        name={name}
        arrOfItems={arrOfItems}
		    setArrOfItems={setArrOfItems}
        username={username}
        destination={destination}
        depDate={depDate}
        returnDate={returnDate}
        loggedIn={loggedIn}
      />
      <Weather id='weather' dailyWeatherArr={dailyWeatherArr} />
    </div>
  );
};

export default MainDisplay;


