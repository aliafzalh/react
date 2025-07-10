

import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
console.log("API Key:", API_KEY);


const URL = `https://api.openweathermap.org/data/2.5/weather?lat=40.7128&lon=-74.0060&units=imperial&appid=${API_KEY}`;

function Weather() {
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(URL);
        const data = await result.json();
        console.log(data);
        setTemp(data.main.temp);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="Weather-app">
      {temp !== null ? `New York Now: ${temp} °F` : "Loading..."}
    </div>
  );
}

export default Weather;
