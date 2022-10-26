import React, {useState} from 'react';
import Button from './Button';
import TripContainer from '../containers/TripContainer';

import axios from 'axios';


const TripForm = (props) => {

    const [name, setName] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');

    const handleSave = async e => {
        e.preventDefault();
        try {
        //send post request to endpoint to create new trip with state passed into request 
        //reset state
        //render tripcontainer / un-render tripform
        // const form = document.getElementById('tripForm');
        // const formData = new FormData(form);
        const formData = {name: name, destination: destination, date: date};
        console.log('form data', formData);
        const response = await axios.post('/api/trips', formData)
        if (response.status === 200) alert('Trip Created Successfully'); //--> i want this to disappear
        
    }
        catch(error){ 
            alert('error creating trip');
    
         }
        };

        //  function handleSubmit(event) {
        //     event.preventDefault();
        //     // const loginForm = document.getElementById('loginform')
        //     // const formData = new FormData(loginForm);
        //     const formData = {name: name, destination: destination, date: date};
        //     console.log('form data', formData)
        //   }

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

export default TripForm;