import { Route, Switch } from "react-router-dom";

import React, { Component } from "react";
import Home from "../components/home/index";
class routers extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
export default routers;
