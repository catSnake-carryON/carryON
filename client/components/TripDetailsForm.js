import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

const TripDetailsForm = ({
  name,
  setName,
  destination,
  setDestination,
  depDate,
  setDepDate,
  returnDate,
  setReturnDate,
}) => {
	// let geocoder = new google.maps.Geocoder();
	// console.log(geocoder);

  const navigate = useNavigate();

  //server for axios
  const server = axios.create({
    baseURL: 'http://localhost:3000/',
  });
  //this sets the current day as the min, so you can't plan a trip in the past
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  today = yyyy + '-' + mm + '-' + dd;

  //need to send this data to db so we can get the weather
  const handleNext = (e) => {
    e.preventDefault();
    const formData = {
      destination: destination,
      startDate: depDate,
      endDate: returnDate,
    };
    console.log('form data', formData);
    server
      .post('/getWeather', formData)
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });
    navigate('/MainDisplay');
  };

  return (
    <div className='main-page-layout'>
      <h2>Plan your Trip</h2>
      <div className='tripFormBox'>
        <form id='tripForm'>
          <label>Trip Name:</label>
          <input
            type='text'
            name='name'
            placeholder='Name your Trip'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label>Destination:</label>
          <select
            className='destinationDropDown'
            name='destination'
            type='text'
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
            }}
            defaultValue={'DEFAULT'}
          >
            <option value='DEFAULT' disabled>
              Where are you headed?
            </option>
            <option value='San Diego'>San Diego</option>
            <option value='Los Angeles'>Los Angeles</option>
            <option value='Sacramento'>Sacramento</option>
            <option value='Santa Barbara'>Santa Barbara</option>
            <option value='San Jose'>San Jose</option>
            <option value='Fresno'>Fresno</option>
          </select>
          <label>Departure Date:</label>
          <input
            type='date'
            name='date'
            placeholder='When are you traveling?'
            min={today}
            value={depDate}
            onChange={(e) => {
              setDepDate(e.target.value);
            }}
          />
          <label>Return Date:</label>
          <input
            type='date'
            name='date'
            placeholder='When are you traveling?'
            min={depDate}
            value={returnDate}
            onChange={(e) => {
              setReturnDate(e.target.value);
            }}
          />
          <button text='next' type='submit' onClick={handleNext}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default TripDetailsForm;

  //  function handleSubmit(event) {
  //     event.preventDefault();
  //     // const loginForm = document.getElementById('loginform')
  //     // const formData = new FormData(loginForm);
  //     const formData = {name: name, destination: destination, date: date};
  //     console.log('form data', formData)
  //   }

  // const handleCancel = e => {
  // 	//reset all state
  // 	//hide trip form trip form
  // 	showTrip(false);
  // }