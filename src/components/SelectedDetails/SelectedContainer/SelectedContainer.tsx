import React, { useEffect, useState } from "react";

import "./SelectedContainer.scss";
import { useWeather } from "../../../hooks";
import {
  CurrentWeatherModel,
  EmptyCurrentWeather,
  EmptyDailyWeatherModel,
  EmptyHourlyWeatherModel,
  EmptyLocationModel,
  LocationModel,
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
  index:any;
  changeSettings: (newSettings: object) => void;
};

export const SelectedContainer = ({
  settings,
  changeSettings,
  data,
  index,
}: ContainerProps) => {
  const useMockData: boolean = false;
  const [currentWeatherSelectedItem, setCurrentWeatherSelectedItem] = useState(EmptyCurrentWeather);

  const [location, setLocation] = useState(EmptyLocationModel);
  const { isLoading, currentWeather, hourlyWeather, dailyWeather } =
    useWeather(location, settings.unit, useMockData,index);

  useEffect(() => {
    setCurrentWeatherSelectedItem(currentWeather);
  }, [currentWeather]);

  const hourlyItemClickHandler = (current: CurrentWeatherModel) => {
    setCurrentWeatherSelectedItem(current);
  };

  const changeLocationHandler = (loc: LocationModel) => {
    setLocation(loc);
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
          <SelectedHourly
            settings={settings}
            data={hourlyWeather}
            clickHandler={hourlyItemClickHandler}
          />
          <SelectedCurrentWeather
            settings={settings}
            data={currentWeatherSelectedItem}
          />          
          <SelectedDailyWeatherDetails data={data} />    
        </div>
      </Loading>
    </div>
  );
};
