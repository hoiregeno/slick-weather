const Card = ({
  weather: {
    name: city,
    main: { temp, humidity },
    weather: [{ description, icon }],
  },
}) => {
  return (
    <div>
      <h1>{city}</h1>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />

      <h2>{Math.round(temp)}°C</h2>
      <p>{description}</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
};

export default Card;
