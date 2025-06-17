import React from 'react'
import './Day.css'

function Day(props) {

  const { date, temperature, weather } = props

  const temperatureClass = temperature < 60 ? "cold" : "hot";
  const weatherEmoji = {"Windy": "🍃", "Sunny": "☀️", "Cloudy": "☁️", Rainy:"☔️"}
  const theClass = temperature < 60 ? "cold" : "hot"

  debugger

  return (
    <div>
      <h2>{date}</h2>
      <p className="weather">{weatherEmoji[weather]}</p>
      <p className={`temperature ${temperature < 60 ? "cold" : "hot"}`}>{temperature}°</p>
    </div>
  )
}

export default Day
