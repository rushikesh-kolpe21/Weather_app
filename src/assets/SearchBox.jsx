import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const url = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "39095cbe58f31cffd97f7d25fb766ea3";

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(`${url}?q=${city}&appid=${API_KEY}`);
      let jsonData = await response.json();
      let result = {
        city: city,
        temp: jsonData.main.temp,
        temMax: jsonData.main.temp_max,
        temMin: jsonData.main.temp_min,
        humidity: jsonData.main.humidity,
        feelsLike: jsonData.main.feels_like,
        weather: jsonData.weather[0].description
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setCity("");
      setError(false);
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          InputProps={{
            style: { color: 'white' }
          }}
          InputLabelProps={{
            style: { color: 'white' }
          }}
        />
        <br /><br />
        <Button
          variant="contained"
          type="submit"
          style={{ marginBottom: '9px' }}
        >
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </div>
  );
}
