import React from "react";
import { Container } from "./components/Container/Container";
import { ErrorBoundary } from "react-error-boundary";
import { Error, ErrorHandler } from "./components/Common/Error/Error";
import "./App.scss";
import { useSettings } from "./hooks";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { settings, changeSettings } = useSettings();

  return (
    <BrowserRouter>
      <main className={settings.theme}>
        <div className="main-container">
        <ErrorBoundary FallbackComponent={Error} onError={ErrorHandler}>
          <Container
            settings={settings}
            changeSettings={changeSettings}
          ></Container>
        </ErrorBoundary>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
