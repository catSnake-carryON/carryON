import React, { useState } from 'react';
import AddItemForm from './AddItemForm';
import ListContainer from './ListContainer';
import Weather from './Weather';
import axios from 'axios';

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
    <div>
      <div className='tripDetails'>
        <h1>{name}</h1>
        <p>Where: {destination}</p>
        <p>Departure: {depDate}</p>
        <p>Return: {returnDate}</p>
      </div>
      <AddItemForm
        itemInput={itemInput}
        setItemInput={setItemInput}
        arrOfItems={arrOfItems}
        setArrOfItems={setArrOfItems}
        itemQuantity={itemQuantity}
        setItemQuantity={setItemQuantity}
      />
      <ListContainer
        name={name}
        arrOfItems={arrOfItems}
		setArrOfItems={setArrOfItems}
        username={username}
        destination={destination}
        depDate={depDate}
        returnDate={returnDate}
        loggedIn={loggedIn}
      />
      <Weather dailyWeatherArr={dailyWeatherArr} />
    </div>
  );
};

export default MainDisplay;


