import { takeLatest, call, put } from 'redux-saga/effects';

import { facebookLogIn, googleLogIn, logOut, logIn } from '../../api/index';
import * as global from './index';
import * as apiTypes from '../../api/apiTypes';

function* getFacebookLogin() {
  try {
    yield call(facebookLogIn);
    yield put({
      type: global.FACEBOOK_LOGIN_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: global.FACEBOOK_LOGIN_FAILURE,
    });
  }
}

function* getGooGleLogin(action: global.loginAction) {
  try {
    const loginRes: apiTypes.LoginResType = yield call(logIn, action.payload);
    yield put({
      type: global.GOOGLE_LOGIN_SUCCESS,
      payload: loginRes.user,
    });
  } catch (error) {
    yield put({
      type: global.GOOGLE_LOGIN_FAILURE,
    });
  }
}

function* getLogout() {
  try {
    yield call(logOut);
    yield put({
      type: global.LOG_OUT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: global.LOG_OUT_FAILURE,
    });
  }
}

export function* loginSaga() {
  yield takeLatest(global.FACEBOOK_LOGIN, getFacebookLogin);
  yield takeLatest(global.GOOGLE_LOGIN, getGooGleLogin);
  yield takeLatest(global.LOG_OUT, getLogout);
}
