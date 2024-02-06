import React from "react";
import "./SelectedCurrentWeatherDetails.scss";
import { DailyWeatherDetailsModel } from "../../../models";

type DailyItemDetailsProps = {
  data: DailyWeatherDetailsModel;
};

export const SelectedDailyWeatherDetails = ({
  data,
}: DailyItemDetailsProps) => {
  return (
    <div className="selcurrent-weather-details">
      <div className="current-weather-details-grid">
        <div className="current-weather-details-grid-item">
          <label>Rain:</label>
          <label>{data.rain.toFixed(2)}%</label>
        </div>
        <div className="current-weather-details-grid-item">
        <label>Pressure:</label>
          <label>{data.pressure}hPa</label>
        </div>
        <div className="current-weather-details-grid-item">
        <label>Humidity:</label>
          <label>{data.humidity}%</label>
        </div>
        <div className="current-weather-details-grid-item">
        <label>Clouds:</label>
          <label>{data.clouds}%</label>
        </div>
        <div className="current-weather-details-grid-item">
        <label>Wind speed:</label>
          <label>{data ? Math.round(data.wind_speed) : ""} m/s</label>
        </div>
        <div className="current-weather-details-grid-item">
        <label>UV Index:</label>
          <label>{data.uvi}</label>
        </div>
        <div className="current-weather-details-grid-item">
        <label>Sunrise:</label>
          <label>
            {new Date(data.sunrise * 1000).toLocaleString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </label>
        </div>
        <div className="current-weather-details-grid-item">
        <label>Sunset:</label>
          <label>
            {new Date(data.sunset * 1000).toLocaleString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </label>
        </div>
      </div>
    </div>
  );
};

export default SelectedDailyWeatherDetails;