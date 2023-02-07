import React, { useState, useEffect } from 'react';
import Card from './components/card/card';

import './App.css';

function App() {

  const apiKey = "0acf5d42d41b7766a7869d72838dfe39";

  const cities = ["Cape Town", "Johannesburg", "Copenhagen", "London", "New York City", "Tokyo", "Paris", "Amsterdam", "Glasgow"];

  return (
    <div className="App">
      <div>
        {cities.map((city) => (
          <Card city={city} />
        ))}
      </div>

    </div>
  );
}

export default App;
