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

function* getMypageFeeds(action: feed.GetMypageFeed) {
  const token: string = action.payload.token;
  console.log(token);
  try {
    const feedData = yield call(getMypageFeed, { token });
    yield put({
      type: feed.GET_MYPAGE_FEED_SUCCESS,
      payload: { feedData },
    });
  } catch (error) {
    yield put({
      type: feed.GET_FEED_FAILURE,
      payload: error,
    });
  }
}

function* getMypageTagFeeds(action: feed.GetMypageTagFeed) {
  const token: string = action.payload.token;
  try {
    const feedData = yield call(getMypageTagFeed, { token });
    yield put({
      type: feed.GET_MYPAGE_TAG_FEED_SUCCESS,
      payload: { feedData },
    });
  } catch (error) {
    yield put({
      type: feed.GET_FEED_FAILURE,
      payload: error,
    });
  }
}

function* deleteFeedPost(action: feed.DeletePost) {
  const token: string = action.payload.token;
  const postId: string = action.payload.postId;
  try {
    const deletePostStatus = yield call(deletePost, { token, postId });
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
  yield takeLatest(feed.GET_MYPAGE_TAG_FEED, getMypageTagFeeds);
  yield takeLatest(feed.DELETE_POST, deleteFeedPost);
}
