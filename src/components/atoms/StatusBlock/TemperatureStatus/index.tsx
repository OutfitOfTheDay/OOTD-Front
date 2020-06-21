import * as React from 'react';

import * as S from './style';
import { weather } from 'assets/index';

interface Props {
  temp: number;
}

const TemperatureStatus: React.FC<Props> = ({ temp }) => (
  <S.wrapper>
    <S.tempIcon src={weather.temperature} alt="temperature" />
    <span>
      <S.tempText>{temp}</S.tempText>
      <S.celsius>°C</S.celsius>
    </span>
  </S.wrapper>
);

export default TemperatureStatus;
