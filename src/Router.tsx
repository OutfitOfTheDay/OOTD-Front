import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DetailPost from './components/templates/DetailPost';
import Feed from './components/templates/Feed';
import MyPage from './components/templates/MyPageFeed';
import PostUpload from './components/templates/PostUpload';
const Router: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route exact path="/detailPost" component={DetailPost} />
    <Route exact path="/mypage" component={MyPage} />
    <Route
      exact
      path="/upload"
      component={() => <PostUpload isEditMode={false} />}
    />
    <Route
      exact
      path="/edit"
      component={() => <PostUpload isEditMode={true} />}
    />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default Router;
