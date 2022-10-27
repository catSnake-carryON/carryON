import React, {useState} from 'react';
import Button from './component/TripBtn';
import TripForm from '../component/TripForm';
import Trip from '../component/Trip';
import { PropaneSharp } from '@mui/icons-material';
require('bootstrap');
const axios = require('axios');


const TripContainer = () => {

    const [showForm, setShowForm] = useState(false);

    const showTrip = () => { //this will render tripform
        setShowForm(!showForm);
    };
    const trips = []; //get request to db with all trips associated with user
    
    axios.get('/api/trips')
    .then(data => {
        data.forEach((el, i) => {
            trips.push(<Trip id={el.name+i} name={el.name} destination={el.destination} date={el.date} />)
        });
    });

    return (
        <div>
            <h1>My Trips</h1>
            <div>
             {showForm ? <TripForm showTrip={showTrip}/> : <></>}
            </div>
            <div>
            <Button id='tripBtn' onClick={showTrip} text='Show/Hide Trip Form'/>
            </div>
            <div>
                {...trips}
                {props.children} 
            </div>
           
        </div>  
        

    );
};

module.exports = TripContainer;