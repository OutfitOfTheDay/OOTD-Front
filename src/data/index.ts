import { createStore, applyMiddleware, combineReducers } from 'redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';
import { all } from 'redux-saga/effects';
import feed, { FeedState } from './feed';
import detailPost, { DetailPostState } from './detailPost';

export interface StoreState {
  feed: FeedState;
  detailPost: DetailPostState;
}

const rootReducer = combineReducers({
  feed,
  detailPost,
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
  yield all([]);
  yield all([call(weatherStatus), call(postUpload)]);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare)),
);
export default store;

export type rootState = ReturnType<typeof rootReducer>;

sagaMiddleWare.run(rootSaga);
