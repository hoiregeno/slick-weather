import { useState } from "react";

// API key loaded from environment variable to keep it out of source code
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async (e) => {
    e.preventDefault();

    // Prevent empty searches
    if (!city) return;

    setIsLoading(true);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Unable to find "${city}"`);
      }

      const data = await response.json();

      setWeather(data);
      // Clear previous errors on successful fetch
      setErr("");
    } catch (err) {
      setErr(err.message);
    } finally {
      // Always reset loading regardless of success or failure
      setIsLoading(false);
    }

    // Clear input after every search attempt
    setCity("");
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return { weather, city, err, isLoading, fetchWeather, handleChange };
};
