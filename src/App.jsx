import React from 'react';
import './App.css';
import SearchForm from './SearchForm';
import Forecast from './Forecast';

function App() {
  return (
    <div className="App">
      <h1>Weather Report</h1>
      <SearchForm />
      <Forecast />
    </div>
  )
}

export default App
