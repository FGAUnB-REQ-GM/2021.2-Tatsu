import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { history } from "./history";
import LoginScreen from "./Pages/LoginScreen";
import RegisterScreen from "./Pages/RegisterScreen";
import ForgetPasswordScreen from "./Pages/ForgetPasswordScreen";
import ChangePassowordScreen from "./Pages/ChangePasswordScreen";
import EditProfileScreen from "./Pages/EditProfileScreen";
import CardScreen from "./Pages/CardScreen";
import Games from "./Pages/Games";
import Game from "./Pages/Game";
import CreateGame from "./Pages/CreateGame";
import EditGame from "./Pages/EditGame";



const Routes = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/" component={() => <LoginScreen />} />
      <Route exact path="/register" component={() => <RegisterScreen />} />
      <Route exact path="/forgetPassword" component={() => <ForgetPasswordScreen />} />
      <Route exact path="/changePassword" component={() => <ChangePassowordScreen />} />
      <Route exact path="/editProfile" component={() => <EditProfileScreen />} />
      <Route exact path="/card" component={() => <CardScreen />} />
      <Route exact path="/home" component={() => <Games />} />
      <Route exact path="/createGame" component={() => <CreateGame />}/>
      <Route path={"/editGame/:gameId"} component={()=><EditGame/>}/>
      <Route path={"/game/:gameId"} component={()=><Game/>}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
