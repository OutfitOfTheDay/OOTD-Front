import React from 'react';
import * as S from './style';
import { ImgNumber } from '../index';
import usePagination from '../../../../hooks/usePagination';

interface Props {
  getPhotoIndex: (index: number) => void;
  selectedPhotoIndex: number;
  numberOfPhoto: number;
}

const ImgNumberWrapper: React.FC<Props> = ({
  getPhotoIndex,
  selectedPhotoIndex,
  numberOfPhoto,
}) => {
  return (
    <>
      <S.ImgNumberWrapper>
        {[...Array(numberOfPhoto).keys()].map((photoNum, index) => (
          <ImgNumber
            key={index}
            photoIndex={index}
            getPhotoIndex={getPhotoIndex}
            selectedPhotoIndex={selectedPhotoIndex}
          />
        ))}
      </S.ImgNumberWrapper>
    </>
  );
};

export default ImgNumberWrapper;
