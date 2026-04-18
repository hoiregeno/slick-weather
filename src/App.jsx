import Card from "./components/Card";
import { useWeather } from "./hooks/useWeather";

const App = () => {
  const { weather, city, err, isLoading, fetchWeather, handleChange } =
    useWeather();

  return (
    <div className="bg-teal-950 min-h-screen p-8 flex flex-col items-center">
      <form onSubmit={fetchWeather} className="flex gap-4">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleChange}
          className="bg-teal-300/10 px-4 py-2 rounded-sm outline-none border-2 border-transparent focus:border-2 focus:border-teal-200/50 text-teal-100"
        />
        <button
          type="submit"
          className="bg-amber-200 px-4 rounded-sm cursor-pointer font-semibold text-teal-950 hover:bg-amber-300 transition-colors duration-75 ease-in disabled:bg-gray-500 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>

      {err && <p className="text-red-400 mt-4 font-semibold">{err}</p>}

      {weather && <Card weather={weather} />}
    </div>
  );
};

export default App;
