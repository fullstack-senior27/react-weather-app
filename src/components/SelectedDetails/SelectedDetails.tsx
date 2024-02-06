import React from "react";
import { SelectedContainer } from "./SelectedContainer/SelectedContainer";
import { ErrorBoundary } from "react-error-boundary";
import { Error, ErrorHandler } from "../../components/Common/Error/Error";
import "./SelectedDetails.scss";
import { useSettings } from "../../hooks";
import { useLocation } from "react-router";

export const App = () => {
  const { settings, changeSettings } = useSettings();
  let { state } = useLocation();
  return (
    <main className={settings.theme}>
      <div className="main-container">
        <ErrorBoundary FallbackComponent={Error} onError={ErrorHandler}>
          <SelectedContainer
            settings={settings}
            data={state}
            changeSettings={changeSettings}
          />
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default App;
