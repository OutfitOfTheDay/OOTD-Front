import { all, fork, takeLatest, call, put } from 'redux-saga/effects';

import { getCommentData } from '../api/index';
import * as comment from './comment';

function* getComment(action: comment.CommentAction) {
  try {
    const commentData = yield call(getCommentData, action.payload);
    yield put({
      type: comment.GET_COMMENT_SUCCESS,
      payload: commentData,
    });
  } catch (error) {
    yield put({
      type: comment.GET_COMMENT_FAILURE,
      payload: error,
    });
  }
}

export function* commentSaga() {
  yield takeLatest(comment.GET_COMMENT, getComment);
}
