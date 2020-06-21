import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../data';
import {
  changeWeatherStatus,
  getWeatherStatus,
} from '../data/modules/WeatherStatus';

export default function useWeatherStatus() {
  const weather = useSelector((state: RootState) => state.weather.weather);

  const dispatch = useDispatch();

  const onChangeWeatherStatus = useCallback(
    (status: number) => dispatch(changeWeatherStatus(status)),
    [dispatch],
  );

  const onSetWeatherStatus = useCallback(
    (lat: number, lon: number) =>
      dispatch(getWeatherStatus({ location: { lat, lon } })),
    [dispatch],
  );

  return {
    onChangeWeatherStatus,
    onSetWeatherStatus,
    weather,
  };
}
