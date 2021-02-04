import { Route, Switch } from "react-router-dom";

import React, { Component } from "react";
import Home from "../container/home/Home";
import Login from '../container/login/Login';
class routers extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}
export default routers;
