import React, {useState} from 'react';
import Trip from './Trip';
import axios from 'axios';


const PackingList = () => {

    const [showForm, setShowForm] = useState(false);

    const server = axios.create({
		baseURL: 'http://localhost:3000/',
	});

    const showTrip = () => { //this will render tripform
        setShowForm(!showForm);
    };
    const trips = []; //get request to db with all trips associated with user
    
    server
    .get('/api/trips')
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
            <button id='tripBtn' onClick={showTrip} text='Show/Hide Trip Form'>showTrip</button>
            </div>
            <div>
                {trips} 
            </div>
        </div>  
    );
};

//module.exports = TripContainer;
export default PackingList;