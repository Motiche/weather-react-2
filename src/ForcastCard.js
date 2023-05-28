import "./index.css";

export default function ForcastCard() {
  const Weather_data = [
    {
      Weekday: "Sun",
      Temp_min: 20,
      Temp_max: 24,
      Icons: "🌤",
      Description: "nice",
    },
    {
      Weekday: "Mon",
      Temp_min: 20,
      Temp_max: 24,
      Icons: "⛅",
      Description: "nice",
    },
    {
      Weekday: "Tue",
      Temp_min: 20,
      Temp_max: 24,
      Icons: "🌥",
      Description: "nice",
    },
    {
      Weekday: "Wed",
      Temp_min: 20,
      Temp_max: 24,
      Icons: "🌦",
      Description: "nice",
    },
    {
      Weekday: "Thr",
      Temp_min: 20,
      Temp_max: 24,
      Icons: "☁",
      Description: "nice",
    },
    {
      Weekday: "Fri",
      Temp_min: 20,
      Temp_max: 24,
      Icons: "🌧",
      Description: "nice",
    },
  ];

  return (
    <div className="row">
      {Weather_data.map(function (Day, index) {
        return (
          <div
            class="col-sm-6 col-md-2 card card-body Weather-card"
            key={index}
          >
            <b>{Day.Weekday} </b>

            <b>{Day.Icons}</b>
            <p>
              <span class="Forcast-desc">{Day.Description}</span>
              <br />
              <span class="Temp Prediction">
                {Day.Temp_min} - {Day.Temp_max}°C
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
