import React, { useState, useEffect } from 'react';
import Card from './components/card/card';

import './App.css';

function App() {

  const cities = ["Cape Town", "Johannesburg"];

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
