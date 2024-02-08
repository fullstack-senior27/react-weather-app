import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { screen } from '@testing-library/react';

import Hourly from "./Hourly";

let container : any = null;
const temp_data:any = [];
const temp_settings:any = [];

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

test("changes value when clicked", () => {
  const onchange = jest.fn();
//   render(<Hourly 
//     settings={temp_settings}
//     data={temp_data}
//     onchange={onchange}/>, container);

  // get a hold of the button element, and trigger some clicks on it
  expect(onchange).toHaveBeenCalledTimes(1);
  expect(screen.getByRole("div").getAttribute("class")).toEqual("hourly-item-container active");
});