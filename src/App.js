import React from 'react';
import Nav from "./Nav";
import Home from "./Pages/Home";
import Trabajadores from "./Pages/Trabajadores";
import RadarGraph from "./Charts/RadarGraph";
import Employees from "./Pages/Employees";
import BestEmployeeTab from "./Pages/BestEmployeeTab";
import EmployeeTab2 from "./Pages/EmployeeTab2";
import EmployeeTab3 from "./Pages/EmployeeTab3";
import EmployeeTab4 from "./Pages/EmployeeTab4";
import EmployeeTab5 from "./Pages/EmployeeTab5";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <Router>
        <Nav/>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;