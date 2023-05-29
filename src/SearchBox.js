import React, { useContext } from "react";
import CityContext from "./CityData";
import "./index.css";
// CHANGE
export default function SearchBox() {
  const { WeatherData } = useContext(CityContext);
  const { ChangeWeatherData } = useContext(CityContext);
  let city = WeatherData.city;
  //const [city, setCity] = useState("Tehran");
  function handleSubmit(event) {
    event.preventDefault();
    ChangeWeatherData({ city: city, ready: false });
    //alert(WeatherData.city);
  }
  function handleCityChange(event) {
    city = event.target.value;
  }
  return (
    <form id="Search-City" class="input-group mb-3" onSubmit={handleSubmit}>
      <input
        type="text"
        class="form-control"
        placeholder="Enter the City..."
        aria-label="Enter the City..."
        aria-describedby="button-addon2"
        id="Input-city"
        onChange={handleCityChange}
      />
      <button class="btn btn-outline-dark" type="submit" id="button-addon2">
        Search 🔍
      </button>
      <button class="btn btn-outline-info" type="button" id="My-coords">
        My Location 📍
      </button>
    </form>
  );
}
