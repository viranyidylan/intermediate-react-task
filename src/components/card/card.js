import React, { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";

function Card({ city }) {
  
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:3004/cities?name=${city}`
      );
      console.log(`Result for ${city} is`, result);
      if (Array.isArray(result.data) && result.data.length) {
        setWeather(result.data[0]);
      } else {
        console.error("The response from the server is not an array or it's empty.");
      }
    };
    fetchData();
  }, [city]);

  return (
    <div>
      {weather ? (
        <div class="card">
          <div class="container">
            <h2>{weather.name}</h2>
            <h1>{Math.round(weather.temp)}°C</h1>
            <p>{weather.description}</p>
            <p>H: {Math.round(weather.temp_max)}°C</p>
            <p>L: {Math.round(weather.temp_min)}°C</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Card;
