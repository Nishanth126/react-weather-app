import { useState, useEffect } from "react";

function Weather() {

  const [city, setCity] = useState("Bangalore"); 
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  async function fetchWeather() { 
    const apiKey = "dd93ce5ce9905df61c542ce7300b610a";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const result = await res.json();  

    setData(result);
  }

  return (
    <div style={{ textAlign: "center" }}>  
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>

      {data && (  
        <div>
          <h2>{data.name}</h2>  
          <h3>{data.main.temp} °C</h3> 
          <p>{data.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
