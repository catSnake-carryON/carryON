import React from 'react';

const Trip = (props) => {

    const { name, destination, date } = props;

<article className="tripCard">
      <div className="tripContainer">
        <div>
          <h2 className="tripName">{name}</h2>
        </div>
      </div>
      <ul className="tripDetailsList">
        <li className="tripDetail">Name: {name}</li>
        <li className="tripDetail">Destination: {destination}</li>
        <li className="tripDetail">Date: {date}</li>
        
      </ul>
      </article>
};

module.exports = Trip;