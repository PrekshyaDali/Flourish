import React from "react";

import Dashboard from "./assets/Home/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import Signin from "./pages/Signin";

export default function App() {
  return (
    <>
      <Router>
        <Signin></Signin>
      </Router>
    </>
  );
}
