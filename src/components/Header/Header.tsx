import React from "react";
import { faC, faF, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CurrentWeatherModel, ThemeType, UnitType } from "../../models";
import "./Header.scss";

type HeaderProps = {
  locality?: string;
  country?: string;
  data: CurrentWeatherModel;
  unit: string;
  theme: string;
  changeUnit: (unit: UnitType) => void;
  changeTheme: (theme: ThemeType) => void;
  changeLocation: (location: string) => void;
};

export const Header = ({
  locality,
  country,
  data,
  unit,
  theme,
  changeUnit,
  changeTheme,
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
      <label className="city">{locality}</label>
        <label className="country">{country}</label>
        <label className="date">{getFormatedDate()}</label>
      </div>
      <div className="settings">
        <div className="units">
          <span
            className={unit === "metric" ? "active" : ""}
            onClick={() => {
              changeUnit("metric");
            }}
          >
            Celsius
          </span>
          <span
            className={unit !== "metric" ? "active" : ""}
            onClick={() => {
              changeUnit("imperial");
            }}
          >
            Fahreneit
          </span>
        </div>
        <div
          className="button-theme"
          onClick={() => {
            if (theme === "dark") changeTheme("light");
            else changeTheme("dark");
          }}
        >
          <FontAwesomeIcon
            icon={theme === "dark" ? faSun : faMoon}
          ></FontAwesomeIcon>
          <div className="search">
          <input
            className="input"
            placeholder="Enter your location"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                changeLocation(e.currentTarget.value);
              }
            }}
          ></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;