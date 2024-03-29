import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import SelectedDetails from "./components/SelectedDetails/SelectedDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/React-WeatherApp/Details",
        element: <SelectedDetails />,
    },
]);

const container:any = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);