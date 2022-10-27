import React, {useState} from 'react';
import Button from './component/Button';
import TripContainer from '../containers/TripContainer';
require('bootstrap');
const axios = require('axios');


const TripForm = (props) => {

    const [name, setName] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');

    const handleSave = e => {
        //send post request to endpoint to create new trip with state passed into request 
        //reset state
        //render tripcontainer / un-render tripform
        const form = document.getElementById('tripForm');
        const formData = new FormData(form);
        axios.post('/api/trips', formData)
        .then(response => {
            if (response.status === 200) alert('Trip Created Successfully'); //--> i want this to disappear
        })
        .catch(error => {
            alert('error creating trip')
        })
        

    }

    const handleCancel = e => {
        //reset all state
        //hide trip form trip form
        showTrip(false);
    }

    return (
        <div className='newTrip'>
            <h2>Plan your Trip</h2>
        <div className='newTripForm'></div>
        <form id='tripForm'>
            
                <label>Name:
                <input
                type='text'
                name='name'
                placeholder='Name your Trip'
                value={name}
                onChange={e => {setName(e.target.value)}} 
                />
                </label>
            
            <br />
          
                <label>Destination:
                <input
                type='text'
                name='destination'
                placeholder='Where are you headed?'
                value={destination}
                onChange={e => {setDestination(e.target.value)}} 
                />
                </label>
             
            <br />
            
                <label>Date:
                <input
                type='text'
                name='date'
                placeholder='When are you traveling?'
                value={date}
                onChange={e => {setDate(e.target.value)}} 
                />
                </label>
            <Button text='cancel' onClick={handleCancel}/>
            <Button text='save' onClick={handleSave}/> 
        </form>
        </div>
    );
};
//this will be the popup form to fill in about location/date/of trip
//will have a button to save trip. that will add the trip to trip container and close the trip form

module.exports = TripForm;

<div className='newTrip'>
            <h2>Plan your Trip</h2>
        <div className='newTripForm'></div>
        <form id='tripForm'>
            
                <label>Name:
                <input
                type='text'
                name='name'
                placeholder='Name your Trip'
                value={name}
                onChange={e => {setName(e.target.value)}} 
                />
                </label>
            
            <br />
          
                <label>Destination:
                <input
                type='text'
                name='destination'
                placeholder='Where are you headed?'
                value={destination}
                onChange={e => {setDestination(e.target.value)}} 
                />
                </label>
             
            <br />
            
                <label>Date:
                <input
                type='text'
                name='date'
                placeholder='When are you traveling?'
                value={date}
                onChange={e => {setDate(e.target.value)}} 
                />
                </label>
            <Button text='cancel' onClick={handleCancel}/>
            <Button text='save' onClick={handleSave}/> 
        </form>
        </div>


{/* <div className='newTrip'>
            <h2>Plan your Trip</h2>
        <div className='newTripForm'></div>
        <Form id='tripForm' onSubmit={handleSave}>
            <Form.Group className='name'>
                <Form.Label>Name:</Form.Label>
                <Form.Control
                type='text'
                name='name'
                placeholder='Name your Trip'
                value={name}
                onChange={e => {setName(e.target.value)}} 
                />
            </Form.Group>
            <br />
            <Form.Group className='destination'>
                <Form.Label>Destination:</Form.Label>
                <Form.Control
                type='text'
                name='destination'
                placeholder='Where are you headed?'
                value={destination}
                onChange={e => {setDestination(e.target.value)}} 
                />
            </Form.Group>  
            <br />
            <Form.Group className='destination'>
                <Form.Label>Date:</Form.Label>
                <Form.Control
                type='text'
                name='date'
                placeholder='When are you traveling?'
                value={date}
                onChange={e => {setDate(e.target.value)}} 
                />
            </Form.Group> 
            <Button text='cancel' onClick={handleCancel}/>
            <Button text='save' onClick={handleSave}/> 
        </Form>
        </div> */}