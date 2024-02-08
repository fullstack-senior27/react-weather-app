import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import SearchCity from "./SearchCity";
import "@testing-library/jest-dom";

const temp_location = {
    city: "Tokyo",
    position: {
        latitude: 35.69,
        longitude: 139.69,
    }
}

test("renders the SearchCity", async () => {
//   render(<SearchCity changeLocation={temp_location} />);
  const inputNode = screen.getByPlaceholderText(
    "City Name"
  );
  expect(inputNode).toBeEmptyDOMElement();

//   fireEvent.click(inputNode);
//   const select = screen.getByText("india");
//   expect(select).toBeInTheDocument();
});

test("finds exchange", async () => {
    const search = screen.getByText("japan");
    userEvent.click(search);
    expect(screen.getByRole("input")).toHaveDisplayValue("japan");
});
