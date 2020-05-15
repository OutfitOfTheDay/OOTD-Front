import React from 'react';
import * as S from './style';
import { ImgNumber } from '../index';

interface Props {
  numberOfPhoto?: number;
}

const defaultProps: Props = {
  numberOfPhoto: 5,
};
const ImgNumberWrapper: React.FC<Props> = ({ numberOfPhoto }) => {
  return (
    <>
      <S.ImgNumberWrapper>
        {[...Array(numberOfPhoto).keys()].map((photo) => (
          <ImgNumber key={photo} />
        ))}
      </S.ImgNumberWrapper>
    </>
  );
};

ImgNumberWrapper.defaultProps = defaultProps;

export default ImgNumberWrapper;
