import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';
import { all } from 'redux-saga/effects';
import feed, { FeedState } from './feed';
import post, { PostState } from './post';

export interface StoreState {
  feed: FeedState;
  post: PostState;
}

const rootReducer = combineReducers({
  feed,
  post,
});

const sagaMiddleWare = reduxSaga();
function* rootSaga() {
  yield all([]);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare)),
);
export default store;

sagaMiddleWare.run(rootSaga);
