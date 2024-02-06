import React, { useState } from "react";
import DailyItem from "../DailyItem/DailyItem";
import { DailyWeatherModel, SettingsModel } from "../../models";
import "./Daily.scss";
import { Link } from "react-router-dom";

type DailyProps = {
  settings: SettingsModel;
  data: DailyWeatherModel;
};

export const Daily = ({ settings, data }: DailyProps) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const ClickHandler = (d: any) => {
    if (d.dt === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(d.dt);
    }
  };

  return (
    <div className="daily">
      <label className="title">Daily</label>
      <div className="daily-items-container">
        {data.daily.map((d,index) => (
          <div key={d.dt}>
            <Link
              to={{ pathname: "/React-WeatherApp/Details", search: `${index}` }}
              state={d}
              className="link"
            >
              <DailyItem
                settings={settings}
                data={d}
                onClick={() => ClickHandler(d)}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Daily;
