import { render } from "@testing-library/react";
import CurrentWeatherDetails from "./CurrentWeatherDetails";
import "@testing-library/jest-dom";
const temp = {
    rain:0,
    pressure:0,
    humidity:0,
    visibility:0,
    wind_speed:0
}
test("renders the search page", async () => {
    render(<CurrentWeatherDetails data={temp} />);

    const div = document.createElement('div')
    div.innerHTML = `
        <label>Rain:</label>
        <label>{data?.rain.toFixed(2)}%</label>
        <label>Pressure:</label>
        <label>{data?.pressure}hPa</label>
        <label>Humidity:</label>
        <label>{data?.humidity}%</label>
        <label>Visibility:</label>
        <label>{data?.visibility} km</label>
        <label>Wind speed:</label>
        <label>{data ? Math.round(data.wind_speed) : ""} m/s</label>
    `
  });