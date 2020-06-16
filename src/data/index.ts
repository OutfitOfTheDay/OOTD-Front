import { createStore, applyMiddleware, combineReducers } from 'redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import feed, { FeedState } from './feed/feed';
import detailPost, { DetailPostState } from './detailPost';
import comment, { CommentState } from './comment/comment';
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
});
import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';

const sagaMiddleWare = reduxSaga();
import feedSortReducer from './modules/FeedSort';
const rootReducer = combineReducers({
  feedSortReducer,
});
const sagaMiddleWare = createSagaMiddleware();
function* rootSaga() {
  yield all([
    call(weatherStatus),
    call(postUpload),
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
