import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const Router: React.FC = () => (
  <Switch>
    <Route exact path="/" component={() => <div>메인입니당</div>} />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default Router;
