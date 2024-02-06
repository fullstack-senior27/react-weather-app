import React from "react";
import "./SelectedCurrentWeather.scss";
import { CurrentWeatherModel, SettingsModel } from "../../../models";

type CurrentWeatherProps = {
  settings: SettingsModel;
  data: CurrentWeatherModel;
};

export const SelectedCurrentWeather = ({ settings, data }: CurrentWeatherProps) => {
  const weatherCode = data.weather.icon;
  const unitSymbol = settings.unit === "metric" ? "C" : "F";
  return (
    <div className="selcurrent-weather">
      {/* <a href="/details">Hourly</a> */}
      <div className="image">
        <img src={`https:${weatherCode}`} className="icon" alt="" />
      </div>
      <div className="details">
        <label className="temp">
          {Math.round(data.temp)}°<span>{unitSymbol}</span>
        </label>
        <label className="feelslike">
          Feels like: <span>{Math.round(data.feels_like)}°</span>
        </label>
        <label className="description">{data.weather.description}</label>
      </div>
    </div>
  );
};

export default SelectedCurrentWeather;
