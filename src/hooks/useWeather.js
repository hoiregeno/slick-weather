import { useState } from "react";

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city) return;

    setIsLoading(true);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Unable to find "${city}"`);
      }

      const data = await response.json();

      setWeather(data);
      setErr("");
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }

    setCity("");
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return { weather, city, err, isLoading, fetchWeather, handleChange };
};
