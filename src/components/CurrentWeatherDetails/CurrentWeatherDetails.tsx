import React from "react";
import { CurrentWeatherDetailsModel } from "../../models/CurrentWeatherDetailsModel";
import "./CurrentWeatherDetails.scss";

type CurrentWeatherProps = {
  data: CurrentWeatherDetailsModel;
};

export const CurrentWeatherDetails = ({ data }: CurrentWeatherProps) => {
  console.log(data);
  return (
    <div className="current-weather-details">
      <div className="current-weather-details-grid">
        <div className="current-weather-details-grid-item">
          <label>Rain:</label>
          <label>{data.rain}%</label>
        </div>{" "}
        <div className="current-weather-details-grid-item">
          <label>Pressure:</label>
          <label>{data.pressure}hPa</label>
        </div>{" "}
        <div className="current-weather-details-grid-item">
          <label>Humidity:</label>
          <label>{data.humidity}%</label>
        </div>{" "}
        <div className="current-weather-details-grid-item">
          <label>Visibility:</label>
          <label>{data.visibility} km</label>
        </div>{" "}
        <div className="current-weather-details-grid-item">
          <label>Wind speed:</label>
          <label>{data.wind_speed} m/s</label>
        </div>
      </div>
    </div>
  );
};