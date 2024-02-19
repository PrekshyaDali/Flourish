
import React from 'react'
import Signup from './pages/Signup';
import Dashboard from "./assets/Home/Dashboard";
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        {/*     
      <Signup/> */}
        <Dashboard></Dashboard>
      </Router>
    </>
  );
}
  



