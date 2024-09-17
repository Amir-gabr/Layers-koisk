//
//
//
import "./index.css";
import App from "./App";
import React from "react";
import { Store } from "./redux/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
      <App />
  </Provider>
);
