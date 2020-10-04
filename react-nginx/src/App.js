import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import HomePage from "./components/HomePage/HomePage";
import TimePage from "./components/TimePage/TimePage";
import DummyDataPage from "./components/DummyDataPage/DummyDataPage";
import store from "./store";

const Time = () => <TimePage />;

const DummyData = () => <DummyDataPage />;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dummy/data" component={DummyData} />
          <Route path="/time" component={Time} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
