import { takeLatest, call, put } from 'redux-saga/effects';

import { likePost, getLikedId } from '../api/index';
import * as like from './likePost';
import feed from '../feed/feed';

function* likeInPost(action: like.LikePostAction) {
  try {
    const likeStatus = yield call(likePost, action.payload);
    yield put({
      type: like.LIKE_POST_SUCCESS,
      payload: likeStatus,
    });
  } catch (error) {
    yield put({
      type: like.LIKE_POST_FAILURE,
      payload: error,
    });
  }
}

function* getLikedIdList(action: like.LikePostAction) {
  const token: string = action.payload.token;

  try {
    const likedId = yield call(getLikedId, { token });
    yield put({
      type: like.GET_LIKED_ID_SUCCESS,
      payload: { likedId },
    });
  } catch (error) {
    yield put({
      type: like.GET_LIKED_ID_FAILURE,
      payload: error,
    });
  }
}

export function* likePostSaga() {
  yield takeLatest(like.LIKE_POST, likeInPost);
  yield takeLatest(like.GET_LIKED_ID, getLikedIdList);
}
