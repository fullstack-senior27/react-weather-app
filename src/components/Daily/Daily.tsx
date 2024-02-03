import React, {useState} from "react";
import DailyItem from "../DailyItem/DailyItem";
import "./Daily.scss";

type DailyProps = {
  theme: string;
};

export const Daily = ({ theme }: DailyProps) => {
  const dailyWeather = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const clickHandler = (h: any) => {
    if (h.id === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(h.id);
    }
  };
  return (
    <>
      <div className="daily">
        <label className="title">Daily</label>
        <div className="daily-items-container">
          {dailyWeather.map((h) => (
            <>
              <DailyItem
                theme={theme}
                onClick={() => clickHandler(h)}
              ></DailyItem>
              <div
                className={
                  activeIndex === h.id
                    ? "daily-item-header active"
                    : "daily-item-header"
                }
              >
                Hidden gems
                <div className="daily-item-details">
                  <div className="daily-item-details-item">
                    <label>Rain:</label>
                    <label>0%</label>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Daily;