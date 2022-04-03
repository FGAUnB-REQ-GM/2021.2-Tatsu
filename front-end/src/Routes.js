import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { history } from "./history";
import LoginScreen from "./Pages/LoginScreen";
import RegisterScreen from "./Pages/RegisterScreen";

const Routes = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/" component={() => <LoginScreen />} />
      <Route exact path="/register" component={() => <RegisterScreen />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
