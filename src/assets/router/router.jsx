import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "../../pages/Signin";
import Signup from "../../pages/Signup";
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />

        {/* <Route path="/signin" element={<Signin />} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
