import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { history } from "./history";
import LoginScreen from "./Pages/LoginScreen";

const Routes = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/" component={() => <LoginScreen />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
