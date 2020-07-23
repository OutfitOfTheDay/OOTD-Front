import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { uploadPost } from '../../api';
import {
  UPLOAD_POST,
  UPLOAD_POST_SUCCESS,
  UPLOAD_POST_FAILURE,
  UploadPost,
} from './index';

function* postUpload(action: UploadPost) {
  const post: {
    imgList: File[];
    description: string;
    weather: {
      status: number;
      temp: number;
    };
  } = {
    description: action.payload.post.description,
    imgList: action.payload.post.imgList,
    weather: action.payload.post.weather,
  };
  const token: string = action.payload.token;
  try {
    yield call(uploadPost, { post, token });

    yield put({
      type: UPLOAD_POST_SUCCESS,
    });
    yield put(push('/mypage'));
  } catch (e) {
    yield put({
      payload: { uploadStatus: e.response.status },
      type: UPLOAD_POST_FAILURE,
    });
  }
}

function* watchGetWeatherStatus() {
  yield takeLatest(UPLOAD_POST, postUpload);
}

export default function* weatherStatusSaga() {
  yield all([fork(watchGetWeatherStatus)]);
}
