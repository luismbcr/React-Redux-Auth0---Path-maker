import { Route, Switch } from "react-router-dom";

import React from "react";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard"; 
import PathDetails from "./components/pages/PathDetails"; 
import Callback from "./components/global/Callback";
import LoginRequired from "./components/pages/LoginRequired";
import Auth from "./auth/Auth";
const auth = new Auth();

const Router = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
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
      <Route
        path="/path/:id"
        render={props =>
          auth.isAutheticated() ? (
            <PathDetails {...props} />
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
