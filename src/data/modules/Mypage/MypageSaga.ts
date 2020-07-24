import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { editProfile, getProfile } from '../../api';
import { GetProfileApiType } from '../../api/apiTypes';
import {
  EditProfile,
  EDIT_PROFILE,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,
  GetProfile,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from './index';

function* getProfileInfo(action: GetProfile) {
  try {
    const response: GetProfileApiType = yield call(getProfile, {
      token: action.payload.token,
    });

    yield put({
      payload: {
        img: response.profile,
        name: response.userName,
      },
      type: GET_PROFILE_SUCCESS,
    });
  } catch (e) {
    yield put({
      payload: {
        getStatus: e.response.status,
      },
      type: GET_PROFILE_FAILURE,
    });
  }
}

function* putProfileInfo(action: EditProfile) {
  try {
    yield call(editProfile, {
      token: action.payload.token,
      userName: action.payload.newName,
      profile: action.payload.newImg,
    });

    yield put({
      payload: { editStatus: 200 },
      type: EDIT_PROFILE_SUCCESS,
    });
  } catch (e) {
    yield put({
      payload: { editStatus: e.response.status },
      type: EDIT_PROFILE_FAILURE,
    });
  }
}

function* watchMypage() {
  yield takeLatest(EDIT_PROFILE, putProfileInfo);
  yield takeLatest(GET_PROFILE, getProfileInfo);
}

export default function* MypageSaga() {
  yield all([fork(watchMypage)]);
}
