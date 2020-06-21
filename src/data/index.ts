import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { all, call } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

import feed, { FeedState } from './feed/feed';
import detailPost, { DetailPostState } from './detailPost';
import comment, { CommentState } from './comment/comment';
import feedSortReducer from './modules/FeedSort';
// import postUploadReducer from './modules/PostUpload';
import mypageReducer from './modules/Mypage';
import weatherStatusReducer, {
  InitialState as WeatherState,
} from './modules/WeatherStatus';
// import postUpload from './modules/PostUpload/PostUploadSaga';
import weatherStatus from './modules/WeatherStatus/WeatherStatusSaga';
import { commentSaga } from './comment/commentSaga';
import { feedSaga } from './feed/feedSaga';
import mypage from './modules/Mypage/MypageSaga';

export interface StoreState {
  feed: FeedState;
  detailPost: DetailPostState;
  comment: CommentState;
}

const rootReducer = combineReducers({
  detailPost,
  feed,
  comment,
  feedSortReducer,
  mypageReducer,
  // postUploadReducer,
  weatherStatusReducer,
});
const sagaMiddleWare = createSagaMiddleware();
function* rootSaga() {
  yield all([
    // call(postUpload),
    call(feedSaga),
    call(commentSaga),
    call(weatherStatus), 
    call(mypage)
  ]);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare)),
);
export default store;

export type rootState = ReturnType<typeof rootReducer>;

sagaMiddleWare.run(rootSaga);
