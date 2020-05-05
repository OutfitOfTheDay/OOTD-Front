import * as React from 'react';

import * as S from './style';
import { weather } from 'assets/index';

const TemperatureStatus: React.FC = () => (
  <S.wrapper>
    <S.tempIcon src={weather.temperature} alt="temperature" />
    <span>
      <S.tempText>14</S.tempText>
      <S.celsius>°C</S.celsius>
    </span>
  </S.wrapper>
);

export default TemperatureStatus;
