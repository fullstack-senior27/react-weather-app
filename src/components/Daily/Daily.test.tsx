import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { screen } from '@testing-library/react';

import Daily from "./Daily";

let container:any = null;
const temp_settings:any = [];
const temp_data = {
    "daily": [
        {
          "dt": 1652349600,
          "sunrise": 1652324857,
          "sunset": 1652378117,
          "moonrise": 1652361960,
          "moonset": 1652319180,
          "moon_phase": 0.36,
          "pressure": 1020,
          "humidity": 52,
          "dew_point": 12.66,
          "wind_speed": 3.49,
          "wind_deg": 200,
          "wind_gust": 4.36,
          "clouds": 10,
          "pop": 0,
          "uvi": 6.73,
          "rain":0,
          "minTemp":0,
          "maxTemp":0,
          "weather" : {
            "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
          }
        },
    ]
};
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test("render daily component", () => {
    render(<Daily
        settings={temp_settings} 
        data={temp_data}
        />,
        container
    );
    expect(screen.getByRole("a").getAttribute("href")).toEqual("/React-WeatherApp/Details/?0");
});