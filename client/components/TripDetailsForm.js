import React from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import PackingList from './PackingList';

import axios from 'axios';

const TripDetailsForm = ({name, setName, destination, setDestination, depDate, setDepDate, returnDate, setReturnDate}) => {
	// const [name, setName] = useState('');
	// const [destination, setDestination] = useState('');
	// const [date, setDate] = useState('');
	// const [depDate, setDepDate] = useState('');
  // const [returnDate, setReturnDate] = useState('');

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

	const handleNext = async e => {
		// e.preventDefault();
		// try {
		// //send post request to endpoint to create new trip with state passed into request 
		// //reset state
		// //render tripcontainer / un-render tripform
		// // const form = document.getElementById('tripForm');
		// // const formData = new FormData(form);
		// const formData = {name: name, destination: destination, date: date};
		// console.log('form data', formData);
		// const response = await axios.post('/api/trips', formData)
		// if (response.status === 200) alert('Trip Created Successfully'); //--> i want this to disappear
		// 	}
		// 	catch(error){ 
		// 		alert('Please fill out all fields~');
	// 	}
		e.preventDefault();
		const formData = {tripName: name, destination: destination, startDate: depDate, endDate: returnDate};
		console.log('form data', formData);
		server
		.post('/api/trips', formData)
		.then((res) => console.log(res))
		.catch((err) => {
		console.error(err);
		});
		navigate('/PackingList');
	};

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
						onChange={e => {setName(e.target.value)}}      
					/>
					<label>Destination:</label>
					<select
						className='destinationDropDown'
						name='destination'
						type='text'
						value={destination}
						onChange={e => {setDestination(e.target.value)}}   
					>
						<option value='' disabled defaultValue hidden>Where are you headed?</option>
						<option value='SanDiego'>San Diego</option>
						<option value='LosAngeles'>Los Angeles</option>
						<option value='Sacramento'>Sacramento</option>
						<option value='SantaBarbara'>Santa Barbara</option>
						<option value='SanJose'>San Jose</option>
						<option value='Fresno'>Fresno</option>
					</select>
					{/* <select 
						className='destinationDropDown'
						name='destination'
						default='Where are you headed?'
						// value={destination}
						// onChange={e => {setDestination(e.target.value)}} 
					>
						<option value=''></option>
					</select> */}
					<label>Departure Date:</label>								
					<input
						type='date'
						name='date'
						placeholder='When are you traveling?'
                        min={today}
						value={date}
						onChange={e => {setDate(e.target.value)}} 
					/>
                    {/* <label>Return Date:</label>
					<input
						type='date'
						name='date'
						placeholder='When are you traveling?'
                        min={depDate}
						value={returnDate}
						onChange={e => {setReturnDate(e.target.value)}} 
					/> */}
					<button text='next' type='submit' onClick={handleNext}>Next</button>
				</form>
			</div>
		</div>
	);
}

export default TripDetailsForm;