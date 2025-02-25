import React from "react";
import { useState } from "react";
import "./Weather.css";

const Weather = ({ title }) => {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = async () => {
    //async function that handles our API call
    const apiKey = "9f5a3eeb4f9e45c286a232811251802";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputValue}`;
    try {
      // simply uses template literals to replace a section of the URL with users input
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("error retrieving data");
    }
  };

  return (
    // here we can display the required info in our card.
    <div className="weather-card">
      <h3 className="weather-card-title">{title}</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="weather-input"
        placeholder="Enter a location..."
      />
      <button onClick={handleButtonClick} className="weather-button">
        Submit
      </button>
      {weatherData && (
        <div className="weather-info">
          <p>{weatherData.location.name}</p>
          <p>{weatherData.location.localtime}</p>
          <hr></hr>
          <p>Temperature: {weatherData.current.temp_c} Celsius</p>
          <p>Feels like: {weatherData.current.feelslike_c} Celcius</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Cloud Cover: {weatherData.current.cloud}%</p>
        </div>
      )}
    </div>
  );
};
export default Weather;
