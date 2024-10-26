import "primereact/resources/themes/lara-light-cyan/theme.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeAxios } from "./config/initializeAxios";
import "./index.css";

const { REACT_APP_BASE_URL } = process.env;

const renderApp = async () => {
  if (!REACT_APP_BASE_URL) {
    alert("REACT_APP_BASE_URL is required");
  }

  initializeAxios(REACT_APP_BASE_URL);
  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

renderApp();
