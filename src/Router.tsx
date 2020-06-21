import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Feed from './components/templates/Feed';
import DetailPost from './components/templates/DetailPost';
import MyPage from './components/templates/MyPageFeed';
const Router: React.FC = () => (
  <Switch>
    <Route exact path="/" component={() => <Feed />} />
    <Route exact path="/detailPost" component={() => <DetailPost />} />
    <Route exact path="/mypage" component={() => <MyPage />} />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default Router;
