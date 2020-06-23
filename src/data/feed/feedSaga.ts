import { all, fork, takeLatest, call, put } from 'redux-saga/effects';

import {
  getFeedData,
  getMypageFeed,
  getMypageTagFeed,
  deletePost,
} from '../api/index';
import * as feed from './feed';

function* getMainFeed(action: feed.FeedAction) {
  try {
    const feedData = yield call(getFeedData, action.payload);
    yield put({
      type: feed.GET_FEED_SUCCESS,
      payload: feedData,
    });
  } catch (error) {
    yield put({
      type: feed.GET_FEED_FAILURE,
      payload: error,
    });
  }
}

function* getMypageFeeds() {
  try {
    const feedData = yield call(getMypageFeed);
    yield put({
      type: feed.GET_MYPAGE_FEED_SUCCESS,
      payload: feedData,
    });
  } catch (error) {
    yield put({
      type: feed.GET_FEED_FAILURE,
      payload: error,
    });
  }
}
function* getMypageTagFeeds() {
  try {
    const feedData = yield call(getMypageTagFeed);
    yield put({
      type: feed.GET_MYPAGE_TAG_FEED_SUCCESS,
      payload: feedData,
    });
  } catch (error) {
    yield put({
      type: feed.GET_FEED_FAILURE,
      payload: error,
    });
  }
}

function* deleteFeedPost(action: feed.FeedAction) {
  try {
    const deletePostStatus = yield call(deletePost, action.payload);
    yield put({
      type: feed.DELETE_POST_SUCCESS,
      payload: deletePostStatus,
    });
  } catch (error) {
    yield put({
      type: feed.DELETE_POST_FAILURE,
      payload: error,
    });
  }
}

export function* feedSaga() {
  yield takeLatest(feed.GET_FEED, getMainFeed);
  yield takeLatest(feed.GET_MYPAGE_FEED, getMypageFeeds);
  yield takeLatest(feed.DELETE_POST, deleteFeedPost);
}
