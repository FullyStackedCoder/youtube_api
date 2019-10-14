import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import "./App.css";

import Home from "./containers/Home/Home";
import Results from "./containers/Results/Results";
import Watch from "./containers/Watch/Watch";

function App(props) {
  let routes = (
    <Switch>
      <Route path="/results" component={Results} />
      <Route path="/watch" component={Watch} />
      <Route exact path="/" component={Home} />} />
      <Redirect to="/" />
    </Switch>
  );
  return <div>{routes}</div>;
}

export default withRouter(App);
