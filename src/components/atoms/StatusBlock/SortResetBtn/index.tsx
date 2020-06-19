import * as React from 'react';

import * as S from './style';
import { weather } from 'assets/index';

interface Props {
  resetSortation: () => void;
}

const SortResetBtn: React.FC<Props> = ({ resetSortation }) => (
  <S.resetItemsWrapper onClick={resetSortation}>
    <S.resetIcon src={weather.reset} alt="reset" />
    <S.resetText>초기화</S.resetText>
  </S.resetItemsWrapper>
);

export default SortResetBtn;
