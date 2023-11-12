import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'mobx-react';
import "./style/index.css";
import App from "./components/App";
import { wordStore } from "./stores/WordStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider wordStore={wordStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

