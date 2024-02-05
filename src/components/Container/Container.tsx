import React, { useEffect, useState } from "react";
import { useWeather } from "../../hooks";
import Header from "../Header/Header";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Hourly from "../Hourly/Hourly";
import Daily from "../Daily/Daily";
import {
  CurrentWeatherModel,
  EmptyCurrentWeather,
  SettingsModel,
} from "../../models";
import { LoadingComponent } from "../Common";
import "./Container.scss";

type ContainerProps = {
  settings: SettingsModel;
  changeSettings: (object: object) => void;
};

export const Container = ({ settings, changeSettings }: ContainerProps) => {
  const useMockData: boolean = false;  

  const [unit, setUnit] = useState<UnitType>("metric");
  const [currentWeatherSelectedItem, setCurrentWeatherSelectedItem] =
    useState(EmptyCurrentWeather);
  const [currentLocationName, setCurrentLocationName] = useState<string>("");

  const { isLoading, location, currentWeather, hourlyWeather, dailyWeather } =
  useWeather(currentLocationName, settings.unit, settings.useMockData);

  useEffect(() => {
    setCurrentWeatherSelectedItem(currentWeather);
  }, [currentWeather]);

  const hourlyItemClickHandler = (current: CurrentWeatherModel) => {
    setCurrentWeatherSelectedItem(current);
  };

  const changeLocationHandler = (location: string) => {
    setCurrentLocationName(location);
  };

  return (
    <>
      {settings.useMockData ? (
        <div className="info-popup">
          The application is running in demo mode. To run the application with
          real data please check the{" "}
          <a href="https://github.com/gheorghedarle/React-WeatherApp">
            documentation
          </a>
          .
        </div>
      ) : (
        <></>
      )}
      <div className="container">
        {!isLoading ? (
          <div className="grid-container">
            <Header
              locality={location.locality}
              country={location.country}
              data={currentWeatherSelectedItem}
              unit={settings.unit}
              theme={settings.theme}
              changeSettings={changeSettings}
              changeLocation={changeLocationHandler}
            ></Header>
            <CurrentWeather
              theme={settings.theme}
              unit={settings.unit}
              data={currentWeatherSelectedItem}
            ></CurrentWeather>
            <CurrentWeatherDetails
              data={currentWeatherSelectedItem.details}
            ></CurrentWeatherDetails>
            <Hourly
              theme={settings.theme}
              unit={settings.unit}
              data={hourlyWeather}
              clickHandler={hourlyItemClickHandler}
            ></Hourly>
            <Daily
              theme={settings.theme}
              unit={settings.unit}
              data={dailyWeather}
            ></Daily>
          </div>
        ) : (
          <div className="loading-container">
            <LoadingComponent />
          </div>
        )}
      </div>
    </>
  );
};