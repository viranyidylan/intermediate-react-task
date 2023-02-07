import React, { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";

function Card({ city }) {
  const apiKey = "0acf5d42d41b7766a7869d72838dfe39";

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setWeather(result.data);
    };
    fetchData();
  }, [city]);

  return (
    <div>
      {weather ? (
        <div class="card">
          <div class="container">
            <h2>{weather.name}</h2>
            <h1>{weather.main ? Math.round(weather.main.temp) : null}°C</h1>
            <p>{weather.weather[0].description}</p>
            <p>H: {Math.round(weather.main.temp_max)}°C</p>
            <p>L: {Math.round(weather.main.temp_min)}°C</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Card;
