import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';
import { all, call } from 'redux-saga/effects';
import feed, { FeedState } from './feed/feed';
import detailPost, { DetailPostState } from './detailPost';
import { feedSaga } from './feed/feedSaga';

export interface StoreState {
  feed: FeedState;
  detailPost: DetailPostState;
}

const rootReducer = combineReducers({
  feed,
  detailPost,
});

const sagaMiddleWare = reduxSaga();
function* rootSaga() {
  yield all([call(feedSaga)]);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare)),
);
export default store;

sagaMiddleWare.run(rootSaga);
