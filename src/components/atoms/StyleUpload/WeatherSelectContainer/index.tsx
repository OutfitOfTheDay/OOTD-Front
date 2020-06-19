import * as React from 'react';

import * as S from './style';
import { weather as weatherIcon } from 'assets/index';

const WeatherSelectContainer: React.FC<{
  weather: {
    status: number;
    temp: number;
  };
  onChangeWeatherStatus: (weather: number) => any;
}> = ({ weather, onChangeWeatherStatus }) => {
  const handleChangeWeather = (e: React.MouseEvent) => {
    onChangeWeatherStatus(Number(e.currentTarget.id));
  };

  return (
    <table>
      <tbody>
        <tr>
          <S.TD>
            <img
              src={
                weather.status === 1
                  ? weatherIcon.enabled.clear
                  : weatherIcon.disabled.clear
              }
              id="1"
              onClick={handleChangeWeather}
            />
          </S.TD>
          <S.TD>
            <img
              src={
                weather.status === 2
                  ? weatherIcon.enabled.cloudy
                  : weatherIcon.disabled.cloudy
              }
              id="2"
              onClick={handleChangeWeather}
            />
          </S.TD>
          <S.TD>
            <img
              src={
                weather.status === 3
                  ? weatherIcon.enabled.rain
                  : weatherIcon.disabled.rain
              }
              id="3"
              onClick={handleChangeWeather}
            />
          </S.TD>
          <S.TD>
            <img
              src={
                weather.status === 4
                  ? weatherIcon.enabled.rain_snow
                  : weatherIcon.disabled.rain_snow
              }
              id="4"
              onClick={handleChangeWeather}
            />
          </S.TD>
          <S.TD>
            <img
              src={
                weather.status === 5
                  ? weatherIcon.enabled.snow
                  : weatherIcon.disabled.snow
              }
              id="5"
              onClick={handleChangeWeather}
            />
          </S.TD>
          <S.TD>
            <img src={weatherIcon.temperature} className="temp" />
          </S.TD>
        </tr>
        <tr>
          <S.TD
            id="clear"
            onClick={handleChangeWeather}
            className={weather.status === 1 && 'selected'}
          >
            맑음
          </S.TD>
          <S.TD
            id="cloudy"
            onClick={handleChangeWeather}
            className={weather.status === 2 && 'selected'}
          >
            흐림
          </S.TD>
          <S.TD
            id="rain"
            onClick={handleChangeWeather}
            className={weather.status === 3 && 'selected'}
          >
            비
          </S.TD>
          <S.TD
            id="rain_snow"
            onClick={handleChangeWeather}
            className={weather.status === 4 && 'selected'}
          >
            눈/비
          </S.TD>
          <S.TD
            id="snow"
            onClick={handleChangeWeather}
            className={weather.status === 5 && 'selected'}
          >
            비
          </S.TD>
          <S.TD className="temp">
            {weather.temp}
            <span>°C</span>
          </S.TD>
        </tr>
      </tbody>
    </table>
  );
};

export default WeatherSelectContainer;
