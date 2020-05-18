import React from 'react';
import * as S from './style';
import { ImgNumber } from '../index';
import usePagination from '../../../../hooks/usePagination';

const ImgNumberWrapper: React.FC = ({}) => {
  const { numberOfPhoto } = usePagination();
  return (
    <>
      <S.ImgNumberWrapper>
        {[...Array(numberOfPhoto).keys()].map((photoNum) => (
          <ImgNumber key={photoNum} />
        ))}
      </S.ImgNumberWrapper>
    </>
  );
};

export default ImgNumberWrapper;
