import React from "react";
import { CurrentWeatherDetailsModel } from "../../models";
import { useWeather } from "../../hooks";
import Header from "../Header/Header";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Hourly from "../Hourly/Hourly";
import Daily from "../Daily/Daily";
import "./Container.scss";

type ContainerProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const Container = ({ theme, setTheme }: ContainerProps) => {
  const unit = "metric";
  const { isLoading, currentWeather, hourlyWeather, dailyWeather } = useWeather(
    45.7634188,
    21.2397304,
    unit
  );

  return (
    <div className="container">
      {!isLoading ? (
        <div className="grid-container">
          <Header theme={theme} setTheme={setTheme}></Header>
          <CurrentWeather
            theme={theme}
            unit={unit}
            data={currentWeather}
          ></CurrentWeather>
          <CurrentWeatherDetails
            data={currentWeather.details}
          ></CurrentWeatherDetails>
          <Hourly theme={theme} unit={unit} data={hourlyWeather}></Hourly>
          <Daily theme={theme} unit={unit} data={dailyWeather}></Daily>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};