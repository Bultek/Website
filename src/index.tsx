import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

let el = document.getElementById("root");

if (el===null) {
  el = document.createElement("div");
}

const root = ReactDOM.createRoot(el);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
