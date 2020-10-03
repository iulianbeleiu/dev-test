import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashboardPage from './components/DashboardPage';

function App() {
  return (
    <Router>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/dashboard" component={DashboardPage} />
    </Router>
  );
}

export default App;
