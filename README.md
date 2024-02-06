# React-Weather-App

Weather App is a weather app developed in typescript using `React`, `HTML` and `SASS`.

The app allows you to see the weather from your current location or another location around the globe using **OpenWeather Api** and **Google Maps Api**. \
Using **One Call API** the app displays the current weather, 24 hours and 6 days forecast. You can change the unit system from metric to imperial. \
The app is available in **light** and **dark mode**.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Used Libraries

- [React](https://github.com/facebook/react)
- [Axios](https://github.com/axios/axios) (API Calls)
- [Font Awesome](https://github.com/FortAwesome/Font-Awesome) (Icons)
- [React Error Boundary](https://github.com/bvaughn/react-error-boundary) (Error Handling)
- [React Indiana Drag Scroll](https://github.com/norserium/react-indiana-drag-scroll) (Scroll on drag)
- [Github Pages](https://github.com/tschaub/gh-pages) (Deploy)

## Setup

Create a file called **.env** in the root of the React-Weather-App project. Add the following code in the file.

```
REACT_APP_OPENWEATHER_API_BASEURL = "https://api.openweathermap.org/data/2.5/onecall"
REACT_APP_OPENWEATHER_API_KEY = "YOUR_OPENWEATHERAPI_KEY"
REACT_APP_GEOLOCATION_GEOCODE_BASEURL = "https://maps.googleapis.com/maps/api/geocode/json"
REACT_APP_GEOLOCATION_API_KEY = "YOUR_GOOGLEMAPSAPI_KEY"
```

The app is using **One Call API** from **OpenWeather API**. To start the project you need an account and **OpenWeather API Key**. You can signup and get the key from [here](https://openweathermap.org/api).

The app is using **Geocoding** and **Reverse Geocoding** from **Google Maps API**. To start the project you need a **google** account and **Google Maps API Key**. You can get the key from [here](https://developers.google.com/maps/documentation/geocoding/overview).

## Additional

### Period

3 days

### New Technology

---------

### Added NPM Packages

---------

Thank You ☺
