import React, { useState } from 'react';
import DailyWeather from './DailyWeather';
const Weather = ({ dailyWeatherArr }) => {
  const displayArr = [];
  dailyWeatherArr.forEach((day, i) => {
    displayArr.push(
      <DailyWeather
        key={i}
        id={i}
        dateTime={day.dateTime}
        dayTemp={day.dayTemp}
        dayMin={day.dayMin}
        dayMax={day.dayMax}
      />
    );
  });
  console.log(displayArr);
  return (
    <div>
      <h1>Weather App</h1>
      {displayArr}
    </div>
  );
};

export default Weather;
