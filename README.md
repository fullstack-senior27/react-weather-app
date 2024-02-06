# react-weather-app

Weather App is a weather app developed in typescript using `React`, `HTML` and `SASS`.

The app allows you to see the weather from your current location or another location around the globe using **weatherapi**. \
The app displays the current weather, 24 hours and 6 days forecast. \
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
- [Lodash](https://github.com/lodash/lodash) (debounce)

## Setup

Create a file called **.env** in the root of the React-Weather-App project. Add the following code in the file.

```
REACT_APP_WEATHER_FORECAST_API_BASEURL = http://api.weatherapi.com/v1/forecast.json
REACT_APP_WEATHER_LOCATION_API_BASEURL = http://api.weatherapi.com/v1/search.json
REACT_APP_WEATHER_API_KEY = YOUR_API_KEY
```

The app is using **weatherapi**. To start the project you need an account and **weatherapi API Key**. You can signup and get the key from [here](https://www.weatherapi.com/).

HOSTING LINK: https://react-weather-app-five-omega.vercel.app/

Thank You ☺
