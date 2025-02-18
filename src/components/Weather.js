// src/components/Weather.js

import React, { useState, useEffect } from 'react';
// Optionally import a CSS file if you create one:
// import './Weather.css';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY`)
          .then(response => response.json())
          .then(data => setWeather(data))
          .catch(err => console.error('Error fetching weather:', err));
      });
    }
  }, []);

  return (
    <div className="weather-background">
      {weather ? (
        <p>{weather.weather[0].description}</p>
      ) : (
        <p>Weather data not active yet</p>
      )}
    </div>
  );
};

export default Weather;