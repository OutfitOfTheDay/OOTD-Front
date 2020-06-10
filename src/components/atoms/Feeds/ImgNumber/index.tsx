import React, { useState, useEffect } from 'react';
import * as S from './style';

interface Props {
  photoIndex: number;
  getPhotoIndex: (index: number) => void;
  selectedPhotoIndex: number;
}

const ImgNumber: React.FC<Props> = ({
  getPhotoIndex,
  photoIndex,
  selectedPhotoIndex,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const setSelectedIndex = (): void => {
    if (photoIndex === selectedPhotoIndex) {
      setIsSelected(true);
    } else setIsSelected(false);
  };
  useEffect(() => setSelectedIndex(), [selectedPhotoIndex]);
  return (
    <S.PageNumber
      isSelected={isSelected}
      onClick={() => getPhotoIndex(photoIndex)}
    />
  );
};

export default ImgNumber;
