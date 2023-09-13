// src/components/Weather.js
import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual API key
    fetch(`https://api.openweathermap.org/data/3.0/weather?q=London&appid=1607394c84102ee7158d0ab45d78d0ad`)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  if (!weatherData) {
    return <div>Loading...</div>;
  }
  console.log(weatherData);

  const temperature = Math.round(weatherData.main.temp - 273.15); // Convert from Kelvin to Celsius

  return (
    <div>
      <h2>Weather in {weatherData.name}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default Weather;
