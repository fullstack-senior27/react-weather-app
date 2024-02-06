import React from "react";
import { CurrentWeatherModel, SettingsModel } from "../../../models";
import "./SelectedHourlyItem.scss";

type HourlyItemProps = {
  settings: SettingsModel;
  data: CurrentWeatherModel;
};

export const SelectedHourlyItem = ({ settings, data }: HourlyItemProps) => {
  const weatherCode = data.weather.icon;
  const unitSymbol = settings.unit === "metric" ? "C" : "F";
  return (
    <div className="selhourly-item">
      <label className="hour">{new Date(data.dt * 1000).getHours()}:00</label>
      <img
        src={`https:${weatherCode}`}
        className="icon-small"
        alt=""
      />
      <label className="temp">
        {Math.round(data.temp)}°{unitSymbol}
      </label>
    </div>
  );
};
export default SelectedHourlyItem;
