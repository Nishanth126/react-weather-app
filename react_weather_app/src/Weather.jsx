import { useState, useEffect } from "react";

function Weather() {

  const [city, setCity] = useState("Bangalore"); // default city
  const [data, setData] = useState(null); // store API data

  // 🔥 useEffect runs when city changes
  useEffect(() => {
    fetchWeather();
  }, []);

  async function fetchWeather() {  //async waits for response and then continues
    const apiKey = "dd93ce5ce9905df61c542ce7300b610a";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);//wait
    const result = await res.json();  //

    setData(result);
  }

  return (
    <div style={{ textAlign: "center" }}>  //div moves to next line since it is block level element
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>

      {data && (   //it checks if data exists or not
        <div>
          <h2>{data.name}</h2>  //Displays city name
          <h3>{data.main.temp} °C</h3> //Api stores temperature inside main object
          <p>{data.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;