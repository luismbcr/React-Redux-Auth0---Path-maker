import { Route, Switch } from "react-router-dom";

import React from "react";
import Counter from "./components/Counter";
import Info from "./components/Info";
import Dashboard from "./components/pages/Dashboard"; 
import Callback from "./components/global/Callback";
import LoginRequired from "./components/pages/LoginRequired";
import Auth from "./auth/Auth";
const auth = new Auth();

const Router = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Counter} />
      <Route path="/about" render={props => <Info />} />
      <Route
        path="/dashboard"
        render={props =>
          auth.isAutheticated() ? (
            <Dashboard />
          ) : (
            <LoginRequired/>
          )
        }
      />
      <Route path="/callback" render={props => <Callback {...props}  />} />
 
      <Route render={() => <p>Not found :(</p>} />
    </Switch>
  );
};

export default Router;
