import * as React from 'react';
import * as S from './style';

import { weather } from 'assets/index';

interface Props {
  weatherStatus: number;
}

const WeatherSelectContainer: React.FC<Props> = ({ weatherStatus }) => {
  return (
    <table>
      <tbody>
        <tr>
          <S.TD>
            <S.weatherIcon
              src={
                weatherStatus === 1
                  ? weather.enabled.clear
                  : weather.disabled.clear
              }
            />
          </S.TD>
          <S.TD>
            <S.weatherIcon
              src={
                weatherStatus === 2
                  ? weather.enabled.cloudy
                  : weather.disabled.cloudy
              }
            />
          </S.TD>
          <S.TD>
            <S.weatherIcon
              src={
                weatherStatus === 3
                  ? weather.enabled.rain
                  : weather.disabled.rain
              }
            />
          </S.TD>
          <S.TD>
            <S.weatherIcon
              src={
                weatherStatus === 4
                  ? weather.enabled.rain_snow
                  : weather.disabled.rain_snow
              }
            />
          </S.TD>
          <S.TD>
            <S.weatherIcon
              src={
                weatherStatus === 5
                  ? weather.enabled.snow
                  : weather.disabled.snow
              }
            />
          </S.TD>
        </tr>
        <tr>
          <S.TD className={weatherStatus === 1 && 'selected'}>맑음</S.TD>
          <S.TD className={weatherStatus === 2 && 'selected'}>흐림</S.TD>
          <S.TD className={weatherStatus === 3 && 'selected'}>비 </S.TD>
          <S.TD className={weatherStatus === 4 && 'selected'}>눈/비</S.TD>
          <S.TD className={weatherStatus === 5 && 'selected'}>비 </S.TD>
        </tr>
      </tbody>
    </table>
  );
};

export default WeatherSelectContainer;
