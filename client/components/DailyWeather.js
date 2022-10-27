import React, { useState } from 'react';

const DailyWeather = ({ key, id, dateTime, dayTemp, dayMin, dayMax }) => {
  return (
    <div>
      <h4>Avg temp{dayTemp}</h4>
      <h4>Daily min{dayMin}</h4>
      <h4>Daily max{dayMax}</h4>
    </div>
  );
};

export default DailyWeather;
