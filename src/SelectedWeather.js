import "./index.css";
import React, { useState } from "react";
import axios from "axios";

export default function SelectedWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const apiKey = "4t46b93oa4b0a2872a4342a90af06e55";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&unit=metric`;
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.daily[0].temperature.day,
      humidity: response.data.daily[0].temperature.humidity,
      wind: response.data.daily[0].wind.speed,
      description: response.data.daily[0].condition.description,
      icon_url: response.data.daily[0].condition.icon_url,
      time: response.data.daily[0].time,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="card align-items-center p-0 m-0">
        <div className="col-6 p-0 m-0 float-left">
          <h1 id="City" className="text-capitalize">
            {weatherData.city}
          </h1>
          <div>
            <h2 id="selected_city">Time</h2>
          </div>
          <img src={weatherData.icon_url} class="emoji" id="Weather-icon" />
        </div>
        <div className="col-6 p-0 m-0 float-right">
          <p>
            <div id="Looks">
              <b>{weatherData.description}</b>
            </div>
            Tempreture:{Math.round(weatherData.temperature)}
            <span class="Temp" id="Temp-now">
              °C
            </span>
            <br />
            Todays feel:{" "}
            <span class="Temp" id="feel">
              ?°C
            </span>
            <br />
            Wind Speed: <span id="wind">{weatherData.wind} km/h</span>
            <br />
            Humidity: <span id="humidity">{weatherData.humidity}%</span>
            <br />
          </p>
        </div>
      </div>
    );
  } else {
    axios.get(apiURL).then(handleResponse);
    return "Loading...";
  }
}
