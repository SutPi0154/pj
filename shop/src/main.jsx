import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { DarkModeProvider } from "./Context/DarkModeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DarkModeProvider>
      {/* <Provider>
      </Provider> */}
        <App />
    </DarkModeProvider>
  </BrowserRouter>
);
