import * as React from 'react';

import * as S from './style';
import { weather } from 'assets/index';

const SortResetBtn: React.FC = () => (
  <S.resetItemsWrapper>
    <S.resetIcon src={weather.reset} alt="reset" />
    <S.resetText>초기화</S.resetText>
  </S.resetItemsWrapper>
);

export default SortResetBtn;
