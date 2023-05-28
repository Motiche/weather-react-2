import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

import Chart from "chart.js/auto";
Chart.register(CategoryScale);
const WeatherChart = () => {
  const lineChartData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"],
    datasets: [
      {
        data: [23, 24, 22, 21, 23, 24, 25],
        label: "Tempreture",
        borderColor: "#3333ff",
        fill: true,
        lineTension: 0.5,
      },
      {
        data: [3, 2, 4, 5, 6, 2, 3],
        label: "Wind Speed",
        borderColor: "#ff3333",
        fill: true,
        lineTension: 0.5,
      },
      {
        data: [22, 30, 25, 45, 50, 51, 40],
        label: "Humidity (%)",
        borderColor: "#ff4444",
        fill: true,
        lineTension: 0.5,
      },
    ],
  };

  return (
    <Line
      className="Weather_Chart card card-body Selected align-items-stretch"
      type="line"
      width={160}
      height={60}
      options={{
        title: {
          display: true,
          text: "COVID-19 Cases of Last 6 Months",
          fontSize: 20,
        },
        legend: {
          display: true, //Is the legend shown?
          position: "top", //Position of the legend.
        },
      }}
      data={lineChartData}
    />
  );
};
export default WeatherChart;
