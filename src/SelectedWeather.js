import "./index.css";
import React, { useState } from "react";
import axios from "axios";
import { Puff } from "react-loading-icons";
import FormattedDate from "./FormattedDate";
// import { store, useGlobalState } from "state-pool";

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
      time: new Date(response.data.daily[0].time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="card card-body col-md-6 pr-0 mr-0 mt-4 ml-0">
        <div className="containter">
          <div className="row align-items-center p-0 m-0">
            <div className="text-capitalize float-left col-md-6 p-0 ml-2">
              <h1 id="City">{weatherData.city}</h1>
              <h2 id=" selected_city">
                <FormattedDate date={weatherData.time} />
              </h2>
              <img
                src={weatherData.icon_url}
                className="emoji"
                id="Weather-icon"
                alt="Weather Icon"
              />
            </div>
            <div className="card-text text-capitalize float-right col-md-6 p-0">
              <p>
                <div id="Looks">
                  <b>{weatherData.description}</b>
                </div>
                Tempreture:{Math.round(weatherData.temperature)}
                <span className="Temp" id="Temp-now">
                  °C
                </span>
                <br />
                Todays feel:{" "}
                <span className="Temp" id="feel">
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
        </div>
      </div>
    );
  } else {
    axios.get(apiURL).then(handleResponse);
    return (
      <div class="col-md-6 pr-0 mr-0 mt-4">
        <Puff
          className="loader"
          stroke="#16537e"
          strokeOpacity={0.125}
          speed={0.75}
        />
      </div>
    );
  }
}
