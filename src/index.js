import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UnitChange from "./UnitChange";
import SearchBox from "./SearchBox";
import SelectedWeather from "./SelectedWeather";
import ForcastCard from "./ForcastCard";

import WeatherChart from "./WeatherChart";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div class="container-md centered">
      <div class="row">
        <div class="col-md-3">
          <UnitChange />
        </div>{" "}
        <div class="col-md-2 d-none d-md-block"></div>
        <div class="col-md-7">
          <SearchBox />
        </div>
      </div>
      <div class="row main">
        <div class="col-md-12 col-lg-6 d-none d-md-block pr-0 mr-0 mt-4">
          <SelectedWeather class="p-0" city="london" />
        </div>
        <div class="col-md-12 col-lg-6 d-none d-md-block pr-0 mr-0 mt-4">
          <WeatherChart />
        </div>
      </div>
      <div class="row" id="forcast-cards">
        <ForcastCard />
      </div>
    </div>
    <footer>
      Developed by Motiche <b>𓅓</b>, Available on{" "}
      <a href="https://github.com/Motiche/weather-react">Github</a>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
