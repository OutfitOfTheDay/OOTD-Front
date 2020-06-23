import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DetailPost from './components/templates/DetailPost';
import Feed from './components/templates/Feed';
import PostUpload from 'templates/PostUpload';

const Router: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route exact path="/detailPost" component={DetailPost} />
    <Route exact path="/upload" component={PostUpload} />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default Router;
