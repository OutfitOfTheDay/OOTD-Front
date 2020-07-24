import { WeatherStatusApiType } from '../../api/apiTypes';

const CHANGE_WEATHER_STATUS = 'CHANGE_WEATHER_STATUS';
export const GET_WEATHER_STATUS = 'GET_WEATHER_STATUS';
export const GET_WEATHER_STATUS_SUCCESS = 'GET_WEATHER_STATUS_SUCCESS';
export const GET_WEATHER_STATUS_FAILURE = 'GET_WEATHER_STATUS_FAILURE';

interface ChangeWeatherStatus {
  type: typeof CHANGE_WEATHER_STATUS;
  payload: { status: number; temp: number };
}

export interface GetWeatherStatus {
  type:
    | typeof GET_WEATHER_STATUS
    | typeof GET_WEATHER_STATUS_SUCCESS
    | typeof GET_WEATHER_STATUS_FAILURE;
  payload: {
    location?: {
      lat: number;
      lon: number;
    };
    weather?: {
      temp: number;
      status: number;
    };
    weatherStatus?: 0 | 200 | 400 | 401;
  };
}
export const changeWeatherStatus = (
  status: number,
  temp: number,
): ChangeWeatherStatus => ({
  type: CHANGE_WEATHER_STATUS,
  payload: {
    status,
    temp,
  },
});

export const getWeatherStatus = (payload: {
  location: {
    lat: number;
    lon: number;
  };
}): GetWeatherStatus => ({
  payload,
  type: GET_WEATHER_STATUS,
});

type WeatherStatusActions = ChangeWeatherStatus | GetWeatherStatus;

export type InitialState = {
  weatherStatus: 0 | 200 | 400 | 404;
} & WeatherStatusApiType;

const initialState: InitialState = {
  weather: {
    status: 1,
    temp: 0,
  },
  weatherStatus: 0,
};

const weatherStatusReducer = (
  state = initialState,
  action: WeatherStatusActions,
) => {
  switch (action.type) {
    case CHANGE_WEATHER_STATUS: {
      const changedWeather = {
        ...state.weather,
        status: action.payload.status,
        temp: action.payload.temp,
      };

      return {
        ...state,
        weather: changedWeather,
      };
    }
    case GET_WEATHER_STATUS:
      return {
        ...state,
      };
    case GET_WEATHER_STATUS_SUCCESS: {
      const newWeather = {
        status: action.payload.weather.status,
        temp: action.payload.weather.temp,
      };

      return {
        ...state,
        weather: newWeather,
        weatherStatus: 200,
      };
    }
    case GET_WEATHER_STATUS_FAILURE:
      return {
        ...state,
        weatherStatus: action.payload.weatherStatus,
      };
    default:
      return state;
  }
};

export default weatherStatusReducer;
