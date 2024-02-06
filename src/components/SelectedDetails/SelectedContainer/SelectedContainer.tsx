import React, { useEffect, useState } from "react";

import "./SelectedContainer.scss";
import { useWeather } from "../../../hooks";
import {
  CurrentWeatherModel,
  EmptyCurrentWeather,
  SettingsModel,
} from "../../../models";
import { Loading } from "../../Common";
import SelectedHeader from "../SelectedHeader/SelectedHeader";
import SelectedCurrentWeather from "../SelectedCurrentWeather/SelectedCurrentWeather";
import SelectedCurrentWeatherDetails, {
  SelectedDailyWeatherDetails,
} from "../SelectedCurrentWeatherDetails/SelectedCurrentWeatherDetails";
import SelectedHourly from "../SelectedHourly/SelectedHourly";
import DailyItemDetails from "../../DailyItemDetails/DailyItemDetails";

type ContainerProps = {
  settings: SettingsModel;
  data: any;
  changeSettings: (newSettings: object) => void;
};

export const SelectedContainer = ({
  settings,
  changeSettings,
  data,
}: ContainerProps) => {
  const useMockData: boolean = true;
  const [currentWeatherSelectedItem, setCurrentWeatherSelectedItem] =
    useState(EmptyCurrentWeather);
  const [currentLocationName, setCurrentLocationName] = useState<string>("");

  const { isLoading, location, currentWeather, hourlyWeather, dailyWeather } =
    useWeather(currentLocationName, settings.unit, useMockData);

  useEffect(() => {
    setCurrentWeatherSelectedItem(currentWeather);
    console.log("xxxxxxxxxxxxxxxxxxxxx", currentWeather);
    console.log("zzzzzzzzzzzzzzzzzzzzz", data);
  }, [data]);

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
          <SelectedHeader
            data={data}
            settings={settings}
            changeSettings={changeSettings}
            changeLocation={changeLocationHandler}
          />
          <SelectedCurrentWeather
            settings={settings}
            data={currentWeatherSelectedItem}
          />
          <SelectedHourly
            settings={settings}
            data={hourlyWeather}
            clickHandler={hourlyItemClickHandler}
          />
          <SelectedDailyWeatherDetails data={data} />    
        </div>
      </Loading>
    </div>
  );
};
