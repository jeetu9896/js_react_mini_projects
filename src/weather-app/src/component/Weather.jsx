import { useEffect, useState, useCallback } from "react";
import { debounce } from "../helper";

const key = import.meta.env.VITE_WEATHER_API_KEY;

function Weather() {
  const [fetchedData, setFetchedData] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${latitude},${longitude}`
      );
      const data = await response.json();
      setFetchedData(data);
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
    debounce((city) => {
      fetchWeatherByCity(city);
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
      </div>

      {fetchedData && (
        <div className="weather-card">
          <div className="weather-title">
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
    </div>
  );
}

export default Weather;
