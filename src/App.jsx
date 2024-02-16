import React from "react";
import Button from "./assets/components/Button";
import Nav from "./assets/Home/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./assets/Home/Dashboard";

export default function App() {
  return (
    // <Button name = "Submit"/>
    <Router>
      <Dashboard></Dashboard>
    </Router>
  );
}
