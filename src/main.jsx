import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM from "react-dom"
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./assets/router/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Use Router component instead of AppRouter */}
    <AppRouter>
      <App />
    </AppRouter>
  </React.StrictMode>
);
