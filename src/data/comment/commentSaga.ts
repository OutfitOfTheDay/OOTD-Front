import { all, fork, takeLatest, call, put } from 'redux-saga/effects';

import { getCommentData, writingComment } from '../api/index';
import * as comment from './comment';

function* getComment(action: comment.GetComment) {
  const postId: string = action.payload.postId;
  const token: string = action.payload.token;
  try {
    const commentData = yield call(getCommentData, { token, postId });
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
  const token: string = action.payload.token;
  const text: string = action.payload.text;
  const postId: string = action.payload.postId;
  try {
    const addCommentStatus = yield call(writingComment, {
      token,
      text,
      postId,
    });
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
