import React, { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import {
  CurrentWeatherModel,
  HourlyWeatherModel,
  SettingsModel
} from "../../../models";
import SelectedHourlyItem from "../SelectedHourlyItem/SelectedHourlyItem";
import "./SelectedHourly.scss";

type HourlyProps = {
  settings: SettingsModel;
  data: HourlyWeatherModel;
  clickHandler: (h: CurrentWeatherModel) => void;
};

export const SelectedHourly = ({ settings, data, clickHandler }: HourlyProps) => {
  // const useMockData: boolean = true;
  // const [currentLocationName, setCurrentLocationName] = useState<string>("");
  // const [currentWeatherSelectedItem, setCurrentWeatherSelectedItem] =
  //   useState(EmptyCurrentWeather);
  // const { hourlyWeather } =
  // useWeather(currentLocationName, 'metric', useMockData);
  // data = hourlyWeather;
  // const now = new Date();
  const [activeIndex, setActiveIndex] = useState(
    data && data.hourly[0] ? data.hourly[0].dt : 0
  );

  const partHourly = data.hourly.filter((item,index) => (index%3 === 0));
  const onClickHandler = (h: CurrentWeatherModel) => {
    setActiveIndex(h.dt);
    clickHandler(h);
  };
  
  return (
    <div className="selhourly">
      <label className="title">Hourly</label>
      <div className="hourly-items-container">
        <ScrollContainer>
          {partHourly.map((h) => (
              <div
                key={h.dt}
                className={
                  activeIndex === h.dt
                    ? "hourly-item-container active"
                    : "hourly-item-container"
                }
                onClick={() => onClickHandler(h)}
              >
                <SelectedHourlyItem settings={settings} data={h}></SelectedHourlyItem>
              </div>
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
};

export default SelectedHourly;
