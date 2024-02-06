import React from "react";
import { SettingsModel } from "../../models";
import { DailyWeatherDetailsModel } from "../../models/DailyWeatherDetailsModel";
import "./DailyItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

type DailyItemProps = {
  settings: SettingsModel;
  data: DailyWeatherDetailsModel;
  onClick: () => void;
};

export const DailyItem = ({ settings, data, onClick }: DailyItemProps) => {
  const weatherCode = `${data.weather.icon}`;
  const unitSymbol = settings.unit === "metric" ? "C" : "F";

  return (
    <div className="daily-item" onClick={onClick}>
      <img src={`https:${weatherCode}`} className="icon-small" alt="" />
      <label className="day">
        {new Date(data.dt * 1000).toLocaleString("en-GB", {
          weekday: "long",
        })}
      </label>
      <label className="description">{data.weather.description}</label>
      <label className="min-max">
        {Math.round(data.minTemp)}°{unitSymbol} / {Math.round(data.maxTemp)}°
        {unitSymbol}
      </label>
    </div>
  );
};

export default DailyItem;
