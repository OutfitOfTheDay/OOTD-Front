import { takeLatest, call, put } from 'redux-saga/effects';

import { likePost } from '../api/index';
import * as like from './likePost';

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

export function* likePostSaga() {
  yield takeLatest(like.LIKE_POST, likeInPost);
}
