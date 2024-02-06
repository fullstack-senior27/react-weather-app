import React from "react";
import { faLeftLong, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SelectedHeader.scss";
import { CurrentWeatherModel, LocationModel, SettingsModel } from "../../../models";
import SearchCity from "../../SearchCity/SearchCity";

type HeaderProps = {
  data: CurrentWeatherModel;
  settings: SettingsModel;
  changeSettings: (newSettings: object) => void;
  changeLocation: (location: LocationModel) => void;
};

export const SelectedHeader = ({
  data,
  settings,
  changeSettings,
  changeLocation,
}: HeaderProps) => {
  const getFormatedDate = () => {
    const selectedDate = new Date(data.dt * 1000);
    var date = selectedDate.toLocaleString("en-GB", {
      day: "numeric",
      weekday: "long",
      month: "long",
    });
    var year = selectedDate.toLocaleString("en-GB", {
      year: "numeric",
    });
    var hour = selectedDate.toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `${date} ${year} ${hour}`;
  };

  return (
    <>
      <div className="location">
        <a href="/" className="backLink">
          <FontAwesomeIcon icon={faLeftLong}></FontAwesomeIcon>
        </a>
        <label className="date">{getFormatedDate()}</label>
      </div>
      <div className="settings">
        <div
          className="button-theme"
          onClick={() => {
            if (settings.theme === "dark") changeSettings({ theme: "light" });
            else changeSettings({ theme: "dark" });
          }}
        >
          <FontAwesomeIcon
            icon={settings.theme === "dark" ? faSun : faMoon}
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="search">
        <SearchCity changeLocation={changeLocation}/>
      </div>
    </>
  );
};

export default SelectedHeader;
