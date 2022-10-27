import React, { useState } from 'react';
import DailyWeather from './DailyWeather';
const Weather = ({ dailyWeatherArr }) => {
  const displayArr = [];
  dailyWeatherArr.forEach((day, i) => {
    const date = new Date(day.dateTime * 1000);
    console.log(date);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    const outputDate = `${mm}/${dd}`;

    displayArr.push(
      <DailyWeather
        key={i}
        id={i}
        dateTime={outputDate}
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
