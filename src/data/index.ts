import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import feed, { FeedState } from './feed/feed';
import detailPost, { DetailPostState } from './detailPost';
import comment, { CommentState } from './comment/comment';
import feedSortReducer from './modules/FeedSort';
import { commentSaga } from './comment/commentSaga';
import { feedSaga } from './feed/feedSaga';

export interface StoreState {
  feed: FeedState;
  detailPost: DetailPostState;
  comment: CommentState;
}

const rootReducer = combineReducers({
  feed,
  detailPost,
  comment,
  feedSortReducer,
});
const sagaMiddleWare = createSagaMiddleware();
function* rootSaga() {
  yield all([
    // call(weatherStatus),
    // call(postUpload),
    call(feedSaga),
    call(commentSaga),
  ]);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare)),
);
export default store;

export type rootState = ReturnType<typeof rootReducer>;

sagaMiddleWare.run(rootSaga);
