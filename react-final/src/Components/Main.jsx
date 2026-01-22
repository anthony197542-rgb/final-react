import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";   // or "./components/App" if App.js is inside components
import "./index.css";      // optional, only if you have this file

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
