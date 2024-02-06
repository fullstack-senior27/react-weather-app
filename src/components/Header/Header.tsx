import React from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CurrentWeatherModel, LocationModel, SettingsModel } from "../../models";
import "./Header.scss";
import SearchCity from "../SearchCity/SearchCity";

type HeaderProps = {
  data: CurrentWeatherModel;
  settings: SettingsModel;
  changeSettings: (newSettings: object) => void;
  changeLocation: (location: LocationModel) => void;
};

export const Header = ({
  data,
  settings,
  changeSettings,
  changeLocation,
}: HeaderProps) => {
  const getFormatedDate = () => {
    const selectedDate = new Date(data.dt * 1000);
    const date = selectedDate.toLocaleString("en-GB", {
      day: "numeric",
      weekday: "long",
      month: "long",
    });

    const year = selectedDate.toLocaleString("en-GB", {
      year: "numeric",
    });

    const hour = selectedDate.toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return `${date} ${year} ${hour}`;
  };

  return (
    <>
      <div className="location">
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

export default Header;
