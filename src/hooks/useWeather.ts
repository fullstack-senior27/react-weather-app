import axios from "axios";
import { useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import { useLocation } from ".";
import {
  CurrentWeatherModel,
  DailyWeatherDetailsModel,
  DailyWeatherModel,
  EmptyCurrentWeather,
  EmptyDailyWeatherModel,
  EmptyHourlyWeatherModel,
  HourlyWeatherModel,
} from "../models";

export const useWeather = (
  locationName: string,
  unit: string,
  useMockData: boolean
) => {
  const baseUrl = process.env.REACT_APP_WEATHER_FORECAST_API_BASEURL;
  const apiKey = process.env.REACT_APP_WEATHER_FORECAST_API_KEY;
  const lat = 35.69;
  const lon = 139.69;

  const { location } = useLocation(locationName, useMockData);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherModel>(EmptyCurrentWeather);
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherModel>(
    EmptyHourlyWeatherModel
  );
  const [dailyWeather, setDailyWeather] = useState<DailyWeatherModel>(
    EmptyDailyWeatherModel
  );
  const [dayIndex, setDayIndex] = useState("0");
  const handleError = useErrorHandler();

  useEffect(() => {
    setIsLoading(true);
    if (location) {
      const url = `${baseUrl}?key=${apiKey}&q=${lat},${lon}&days=8`;

      axios
        .get(url)
        .then((response) => {
          const weekForecast = response.data.forecast.forecastday;
          setCurrent(weekForecast[0]);
          setHourly(weekForecast[dayIndex].hour);
          setDaily(weekForecast);
        })
        .catch((error) => {
          handleError(error);
        })
        .finally(() => {
          setTimeout(() => setIsLoading(false), 100);
        });
    }
  }, [location, unit, useMockData, baseUrl, apiKey, handleError]);

  const setCurrent = (data: any) => {
    setCurrentWeather({
      dt: data.date_epoch,
      weather: {
        icon: data.day.condition.icon,
        description: data.day.condition.text,
      },
      temp: data.day.avgtemp_c,
      feels_like: (data.day.mintemp_c + data.day.maxtemp_c) / 2,
      details: {
        rain: data.day.daily_will_it_rain,
        visibility: data.day.avgvis_km,
        humidity: data.day.avghumidity,
        pressure: 1000000000000000,
        wind_speed: data.day.maxwind_mph,
      },
    });
  };

  const setHourly = (data: any) => {
    let hourly: CurrentWeatherModel[] = [];
    data.slice(0, 24).forEach((item: any) => {
      hourly.push({
        dt: item.time_epoch,
        weather: {
          icon: item.condition.icon,
          description: item.condition.text,
        },
        temp: item.temp_c,
        feels_like: item.feelslike_c,
        details: {
          rain: item.precip_mm * 100,
          visibility: item.vis_km,
          humidity: item.humidity,
          pressure: item.pressure_mb,
          wind_speed: item.wind_mph,
        },
      });
    });
    setHourlyWeather({ hourly: hourly });
  };

  const setDaily = (data: any) => {
    let daily: DailyWeatherDetailsModel[] = [];
    data.slice(1).forEach((item: any) => {
      daily.push({
        dt: item.date_epoch,
        clouds: 1000000000000,
        humidity: item.day.avghumidity,
        pressure: 1000000000000,
        sunrise: item.astro.sunrise,
        sunset: item.astro.sunset,
        minTemp: item.day.mintemp_c,
        maxTemp: item.day.maxtemp_c,
        uvi: item.day.uv,
        weather: {
          icon: item.day.condition.icon,
          description: item.day.condition.text,
        },
        wind_speed: item.day.maxwind_mph,
        rain: item.day.totalprecip_mm,
      });
    });
    setDailyWeather({ daily: daily });
  };

  return {
    isLoading,
    location,
    currentWeather,
    hourlyWeather,
    dailyWeather,
  };
};
