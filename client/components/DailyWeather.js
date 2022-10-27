import React, { useState } from 'react';

const DailyWeather = ({ id, dateTime, dayTemp, dayMin, dayMax }) => {

  
  return (
    <div>
      <h3>{dateTime}</h3>
      <p>Avg temp{dayTemp}</p>
      <p>Daily min{dayMin}</p>
      <p>Daily max{dayMax}</p>
    </div>
  );
};

export default DailyWeather;
