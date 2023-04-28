import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {CountriesProvider} from './Context/CountriesContext'
import { DarkModeContextProvider } from "./Context/darkModeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <CountriesProvider >
        <App />
      </CountriesProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
