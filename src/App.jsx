import Card from "./components/Card";
import { useWeather } from "./hooks/useWeather";

const App = () => {
  const { weather, city, err, fetchWeather, handleChange } = useWeather();

  return (
    <>
      <form onSubmit={fetchWeather}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      {err && <p>{err}</p>}

      {weather && <Card weather={weather} />}
    </>
  );
};

export default App;
