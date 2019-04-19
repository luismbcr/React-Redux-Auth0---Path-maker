import { Route, Switch } from "react-router-dom";

import React from "react";

import Counter from './components/Counter';
import Info from "./components/Info";
const Router = () => {
  return (
    <Switch>
       <Route exact path="/" component={Counter} />
       <Route path="/about" component={Info} />
       <Route render={() => <p>Not found :(</p>} />
    </Switch>
  );
};

export default Router;
