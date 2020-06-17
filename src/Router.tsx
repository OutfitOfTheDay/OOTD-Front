import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Feed from './components/templates/Feed';
import DetailPost from './components/templates/DetailPost';
const Router: React.FC = () => (
  <Switch>
    <Route exact path="/" component={() => <Feed />} />
    <Route exact path="/detailPost" component={() => <DetailPost />} />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default Router;
