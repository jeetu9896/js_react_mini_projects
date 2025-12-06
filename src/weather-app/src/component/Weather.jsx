import { useEffect, useState, useCallback } from "react";
import { debounce } from "../helper";
import Forecast from "./Forecast";

const key = import.meta.env.VITE_WEATHER_API_KEY;

function Weather() {
  const [fetchedData, setFetchedData] = useState(null);
  const [city, setCity] = useState("");
  const [days, setDays] = useState();

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${latitude},${longitude}`
      );
      const data = await response.json();
      setFetchedData(data);
      if (data?.location?.name) setCity(data.location.name);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const fetchWeatherByCity = async (city) => {
    if (!city.trim()) return;
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`
      );
      const data = await response.json();
      setFetchedData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const debouncedCitySearch = useCallback(
    debounce((value) => {
      fetchWeatherByCity(value);
      setCity(value);
    }, 800),
    []
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, []);

  return (
    <div className="weather-container">
      <h1>Weather</h1>

      <div className="weather-search">
        <input
          type="text"
          placeholder="Enter city name"
          onChange={(e) => debouncedCitySearch(e.target.value)}
        />
        <div>
          <label htmlFor="days" style={{ marginLeft: 12 }}>
            Forecast days:
          </label>
          <select
            id="days"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            style={{ marginLeft: 8 , padding: 4, backgroundColor: '#000000ff'}}
          >
            {[1, 2, 3].map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>

      {fetchedData && (
        <div className="weather-card">
          <div className="weather-title">
            <h2>Current Weather</h2>
            {city && <option></option>}
            <img src={fetchedData?.current?.condition?.icon} alt="icon" />
            <h2>
              {fetchedData?.location?.name}, {fetchedData?.location?.region}
            </h2>
          </div>

          <div>
            <h3>{fetchedData?.current?.temp_c}°C</h3>
            <p>{fetchedData?.current?.condition?.text}</p>
          </div>

          <div>
            <p>Humidity: {fetchedData?.current?.humidity}%</p>
            <p>Wind: {fetchedData?.current?.wind_kph} kph</p>
            <p>Feels Like: {fetchedData?.current?.feelslike_c}°C</p>
          </div>
        </div>
      )}
      <Forecast
        city={city}
        forecastDays={days}
      />
    </div>
  );
}

export default Weather;
