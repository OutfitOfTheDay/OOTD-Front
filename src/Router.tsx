import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Feed from './components/templates/Feed';

const Router: React.FC = () => (
  <Switch>
    <Route exact path="/" component={() => <Feed />} />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default Router;
