import React from 'react'
import './Day.css'

function Day({ date, temperature, weather }) {

  const temperatureClass = temperature < 60 ? "cold" : "hot";
  const weatherEmoji = {"Windy": "🍃", "Sunny": "☀️", "Cloudy":"☁️", Rainy:"☔️"}

  return (
    <div>
      <h2>{date}</h2>
      <p className="weather">{weatherEmoji[weather]}</p>
      <p className={`temperature ${temperatureClass}`}>{temperature}°</p>
    </div>
  )
}

export default Day
