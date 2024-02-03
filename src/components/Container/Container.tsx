import React, { useEffect, useState } from "react";
import { useWeather } from "../../hooks";
import Header from "../Header/Header";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Hourly from "../Hourly/Hourly";
import Daily from "../Daily/Daily";
import {
  CurrentWeatherModel,
  EmptyCurrentWeather,
  ThemeType,
} from "../../models";
import "./Container.scss";

type ContainerProps = {
  theme: string;
  changeTheme: (theme: ThemeType) => void;
};

export const Container = ({ theme, changeTheme }: ContainerProps) => {
  const unit = "metric";
  const { isLoading, currentWeather, hourlyWeather, dailyWeather } = useWeather(
    45.7634188,
    21.2397304,
    unit,
    true
  );

  const [currentWeatherSelectedItem, setCurrentWeatherSelectedItem] =
  useState(EmptyCurrentWeather);

  useEffect(() => {
    setCurrentWeatherSelectedItem(currentWeather);
  }, [currentWeather]);

  const hourlyItemClickHandler = (current: CurrentWeatherModel) => {
    setCurrentWeatherSelectedItem(current);
  };

  return (
    <div className="container">
      {!isLoading ? (
        <div className="grid-container">
          <Header theme={theme} changeTheme={changeTheme}></Header>
          <CurrentWeather
            theme={theme}
            unit={unit}
            data={currentWeatherSelectedItem}
          ></CurrentWeather>
          <CurrentWeatherDetails
            data={currentWeatherSelectedItem.details}
          ></CurrentWeatherDetails>
          <Hourly
            theme={theme}
            unit={unit}
            data={hourlyWeather}
            clickHandler={hourlyItemClickHandler}
          ></Hourly>
          <Daily theme={theme} unit={unit} data={dailyWeather}></Daily>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};