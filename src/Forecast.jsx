import React from 'react';
import Day from './Day';
import './Forecast.css'; 

function Forecast() {

  const days = [
    { date: "Mon", temperature: 72, weather: "Sunny" },
    { date: "Tue", temperature: 59, weather: "Cloudy" },
    { date: "Wed", temperature: 75, weather: "Rainy" },
    { date: "Thu", temperature: 64, weather: "Windy" },
    { date: "Fri", temperature: 70, weather: "Sunny" },
  ];

  return (
    <div className="forecast-container">
      {days.map(day => (
        <div className="forecast-card" key={day.date}>
          <Day date={day.date} temperature={day.temperature} weather={day.weather} />
        </div>
      ))}
    </div>
  )
}

export default Forecast
