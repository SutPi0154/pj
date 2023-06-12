import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./features/store";
import { DarkModeContextProvider } from "./context/DarkModeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeContextProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </DarkModeContextProvider>
);
