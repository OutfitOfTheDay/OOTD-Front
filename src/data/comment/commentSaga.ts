import { all, fork, takeLatest, call, put } from 'redux-saga/effects';

import { getCommentData, writingComment } from '../api/index';
import * as comment from './comment';

function* getComment(action: comment.GetComment) {
  try {
    const commentData = yield call(getCommentData, action.payload.postId);
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

function* addComment(action: comment.AddComment) {
  try {
    const addCommentStatus = yield call(
      writingComment,
      action.payload.text,
      action.payload.postId,
    );
    yield put({
      type: comment.ADD_COMMENT_SUCCESS,
      payload: addCommentStatus,
    });
  } catch (error) {
    yield put({
      type: comment.ADD_COMMENT_FAILURE,
      payload: error,
    });
  }
}

export function* commentSaga() {
  yield takeLatest(comment.GET_COMMENT, getComment);
  yield takeLatest(comment.ADD_COMMENT, addComment);
}
