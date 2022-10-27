import React, {useState} from 'react';
import AddItemForm from './AddItemForm';
import ListContainer from './ListContainer'
import Weather from './Weather';
import axios from 'axios';


const MainDisplay = ({ name, destination, depDate, returnDate }) => {
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
			<ListContainer arrOfItems={arrOfItems}/> 
			<Weather />
		</div>  
	);
};

export default MainDisplay;

// const [showForm, setShowForm] = useState(false);

// const showTrip = () => { //this will render tripform
// 	setShowForm(!showForm);
// };

// const trips = []; //get request to db with all trips associated with user

// server
// .get('/api/trips')
// .then(data => {
// 		data.forEach((el, i) => {
// 				trips.push(<Trip id={el.name+i} name={el.name} destination={el.destination} date={el.date} />)
// 		});
// });

// <div>
// 	{showForm ? <TripForm showTrip={showTrip}/> : <></>}
// </div>
// <div>
// 	<button id='tripBtn' onClick={showTrip} text='Show/Hide Trip Form'>showTrip</button>
// </div>
// <div>
// 	{trips} 
// </div>