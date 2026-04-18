const Card = ({
  weather: {
    name: city,
    main: { temp, humidity },
    weather: [{ description, icon }],
  },
}) => {
  return (
    <div className="mt-6 bg-teal-200/10 py-4 px-6 rounded-sm text-center text-teal-300 font-bold">
      <h1 className="text-3xl ">{city}</h1>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        className="mx-auto"
      />

      <h2 className="text-amber-200 text-2xl mb-4">{Math.round(temp)}°C</h2>
      <p className="capitalize text-lg">{description}</p>
      <p className="text-lg">Humidity: {humidity}%</p>
    </div>
  );
};

export default Card;
