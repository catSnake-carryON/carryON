import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styling/main-page/main-layout.scss'

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
  dailyWeatherArr,
  setDailyWeatherArr,
}) => {
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

    function geocode() {
      let test = 'test';
      let long;
      let lat;
      axios
        .get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: destination,
            key: 'AIzaSyCykpyAPQzrmS4sECtOywEAbOr2KpKg6mI',
          },
        })
        .then((res) => {
          server
            .post('/getWeather', {
              long: res.data.results[0].geometry.location.lng,
              lat: res.data.results[0].geometry.location.lat,
            })
            .then((res) => {
              console.log('res.data from backend', res.data);
              setDailyWeatherArr(res.data);
			  navigate('/MainDisplay');
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    const arrOfDailyTemps = geocode();
  };

  return (
    <div id='main-page-layout'>
      <h2>Plan your Trip</h2>
      <div id='tripFormBox'>
        <form id='tripForm'>
		  <section className='form-section'>
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
		  </section>
		  <section className='form-section'>
			<label>Destination:</label>
			<select
				className='destinationDropDown'
				name='destination'
				type='text'
				value={destination}
				onChange={(e) => {
				setDestination(e.target.value);
				console.log(destination);
				}}
			>
				<option value='' hidden default disabled>
				Where are you headed?
				</option>
				<option value='San Diego, California'>San Diego</option>
				<option value='Los Angeles, California'>Los Angeles</option>
				<option value='Sacramento, California'>Sacramento</option>
				<option value='Santa Barbara, California'>Santa Barbara</option>
				<option value='San Jose, California'>San Jose</option>
				<option value='Fresno, California'>Fresno</option>
			</select>
		  </section>
		  <section className='form-section'>
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
		  </section>
		  <section className='form-section'>
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
		  </section>
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
