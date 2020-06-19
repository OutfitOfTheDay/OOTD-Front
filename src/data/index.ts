import { createStore, applyMiddleware, combineReducers } from 'redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import createSagaMiddleware from 'redux-saga';

import feedSortReducer from './modules/FeedSort';
import postUploadReducer from './modules/PostUpload';
import mypageReducer from './modules/Mypage';
import weatherStatusReducer, {
  InitialState as WeatherState,
} from './modules/WeatherStatus';
import feed, { FeedState } from './feed';
// import detailPost, { DetailPostState } from './detailPost';

import mypage from './modules/Mypage/MypageSaga';
import postUpload from './modules/PostUpload/PostUploadSaga';
import weatherStatus from './modules/WeatherStatus/WeatherStatusSaga';

export interface StoreState {
  feed: FeedState;
  // detailPost: DetailPostState;
  weather: WeatherState;
}

const rootReducer = combineReducers({
  // detailPost
  feed,
  feedSortReducer,
  mypageReducer,
  postUploadReducer,
  weatherStatusReducer,
});
import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';

const sagaMiddleWare = createSagaMiddleware();
function* rootSaga() {
  yield all([call(weatherStatus), call(postUpload), call(mypage)]);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare)),
);
export default store;

export type rootState = ReturnType<typeof rootReducer>;

sagaMiddleWare.run(rootSaga);
