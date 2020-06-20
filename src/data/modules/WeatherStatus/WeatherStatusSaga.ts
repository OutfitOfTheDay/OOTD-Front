import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { getWeatherStatusApi } from '../../api';
import { WeatherStatusApiType } from '../../api/apiTypes';
import {
  GET_WEATHER_STATUS,
  GET_WEATHER_STATUS_FAILURE,
  GET_WEATHER_STATUS_SUCCESS,
  GetWeatherStatus,
} from './index';

function* getWeatherStatus(action: GetWeatherStatus) {
  try {
    const response: WeatherStatusApiType = yield call(getWeatherStatusApi, {
      lat: action.payload.location.lat,
      lon: action.payload.location.lon,
    });

    yield put({
      payload: { weather: response.weather },
      type: GET_WEATHER_STATUS_SUCCESS,
    });
  } catch (e) {
    yield put({
      payload: { weatherStatus: e.response.status },
      type: GET_WEATHER_STATUS_FAILURE,
    });
  }
}

function* watchGetWeatherStatus() {
  yield takeLatest(GET_WEATHER_STATUS, getWeatherStatus);
}

export default function* weatherStatusSaga() {
  yield all([fork(watchGetWeatherStatus)]);
}
