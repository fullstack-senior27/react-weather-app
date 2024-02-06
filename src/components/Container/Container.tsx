import React, { useEffect, useState } from "react";
import { useWeather } from "../../hooks";
import {
  CurrentWeatherModel,
  EmptyCurrentWeather,
  SettingsModel,
} from "../../models";
import { Loading } from "../Common";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import CurrentWeatherDetails from "../CurrentWeatherDetails/CurrentWeatherDetails";
import Daily from "../Daily/Daily";
import Header from "../Header/Header";
import Hourly from "../Hourly/Hourly";
import "./Container.scss";

type ContainerProps = {
  settings: SettingsModel;
  changeSettings: (newSettings: object) => void;
};

export const Container = ({ settings, changeSettings }: ContainerProps) => {
  const useMockData: boolean = true;
  const [currentWeatherSelectedItem, setCurrentWeatherSelectedItem] =
    useState(EmptyCurrentWeather);
  const [currentLocationName, setCurrentLocationName] = useState<string>("");

  const { isLoading, location, currentWeather, hourlyWeather, dailyWeather } =
    useWeather(currentLocationName, settings.unit, useMockData);

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
    <div className="container">
      <Loading isLoading={isLoading}>
        <div className="grid-container">
          <Header
            data={currentWeatherSelectedItem}
            settings={settings}
            changeSettings={changeSettings}
            changeLocation={changeLocationHandler}
          />
          <CurrentWeather
            settings={settings}
            data={currentWeatherSelectedItem}
          />
          <CurrentWeatherDetails
            data={currentWeatherSelectedItem.details}
          />
          <Hourly
            settings={settings}
            data={hourlyWeather}
            clickHandler={hourlyItemClickHandler}
          />
          <Daily settings={settings} data={dailyWeather}/>
        </div>
      </Loading>
    </div>
  );
};
