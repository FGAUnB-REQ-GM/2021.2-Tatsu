import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { history } from "./history";
import LoginScreen from "./Pages/LoginScreen";
import RegisterScreen from "./Pages/RegisterScreen";
import ForgetPasswordScreen from "./Pages/ForgetPasswordScreen";
import ChangePassowordScreen from "./Pages/ChangePasswordScreen";

const Routes = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/" component={() => <LoginScreen />} />
      <Route exact path="/register" component={() => <RegisterScreen />} />
      <Route exact path="/forget-password" component={() => <ForgetPasswordScreen />} />
      <Route exact path="/change-password" component={() => <ChangePassowordScreen />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
