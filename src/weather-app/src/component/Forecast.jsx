import { useEffect, useState } from "react";

const key = import.meta.env.VITE_WEATHER_API_KEY;

const Forecast = ({ city, forecastDays }) => {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchForecast = async () => {
    if (!city) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=${forecastDays}`
      );
      const data = await response.json();

      if (data.error) {
        setError(data.error.message);
        setForecast(null);
      } else {
        setForecast(data.forecast.forecastday);
      }
    } catch (error) {
      setError("Failed to load forecast data.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForecast();
  }, [city, forecastDays]);

  return (
    <>
      {forecastDays > 1 && (
        <div className="forecast-container">
          <h2>📅 {forecastDays}-Day Forecast</h2>

          {loading && <p>Loading forecast...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          {forecast && (
            <div className="forecast-grid">
              {forecast.map((day) => (
                <div key={day.date} className="forecast-card">
                  <h3>{new Date(day.date).toLocaleDateString()}</h3>

                  <img src={day.day.condition.icon} alt="weather icon" />

                  <p className="condition">{day.day.condition.text}</p>

                  <p>🌡 Max: {day.day.maxtemp_c}°C</p>
                  <p>🌡 Min: {day.day.mintemp_c}°C</p>

                  <p>💧 Humidity: {day.day.avghumidity}%</p>
                  <p>💨 Wind: {day.day.maxwind_kph} kph</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Forecast;
