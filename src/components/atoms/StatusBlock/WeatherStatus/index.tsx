import * as React from 'react';
import * as S from './style';

import { weather } from '../../../../assets';

const WeatherSelectContainer = () => (
  <table>
    <tbody>
      <tr>
        <S.TD>
          <S.weatherIcon src={weather.enabled.clear} />
        </S.TD>
        <S.TD>
          <S.weatherIcon src={weather.enabled.cloudy} />
        </S.TD>
        <S.TD>
          <S.weatherIcon src={weather.enabled.rain} />
        </S.TD>
        <S.TD>
          <S.weatherIcon src={weather.enabled.rain_snow} />
        </S.TD>
        <S.TD>
          <S.weatherIcon src={weather.enabled.snow} />
        </S.TD>
      </tr>
      <tr>
        <S.TD>맑음</S.TD>
        <S.TD>흐림</S.TD>
        <S.TD>비 </S.TD>
        <S.TD>눈/비</S.TD>
        <S.TD>눈 </S.TD>
      </tr>
    </tbody>
  </table>
);

export default WeatherSelectContainer;
