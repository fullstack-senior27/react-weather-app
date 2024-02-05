import React from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CurrentWeatherModel, ThemeType } from "../../models";
import "./Header.scss";

type HeaderProps = {
  locality?: string;
  country?: string;
  data: CurrentWeatherModel;
  theme: string;
  changeTheme: (theme: ThemeType) => void;
  changeLocation: (location: string) => void;
};

export const Header = ({
  locality,
  country,
  data,
  theme,
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