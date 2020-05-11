import React from 'react';
import * as S from './style';

interface Props {
  isSelected?: boolean;
}

const defaultProps: Props = {
  isSelected: false,
};

const ImgNumber: React.FC<Props> = ({ isSelected }) => {
  return <S.PageNumber isSelected={isSelected} />;
};

ImgNumber.defaultProps = defaultProps;

export default ImgNumber;
