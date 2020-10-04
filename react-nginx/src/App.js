import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LoginPage />
      </div>
    </Provider>
  );
}

export default App;
