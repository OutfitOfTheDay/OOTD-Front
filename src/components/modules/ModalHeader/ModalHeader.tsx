import React from 'react';
import * as S from './style';
import closeImg from '../../../assets/close.jpg';

interface Props {
  ModalName: string;
}
const ModalHeader: React.FC<Props> = ({ ModalName }) => {
  return (
    <S.ModalHeaderWrapper>
      <S.ModalName>{ModalName}</S.ModalName>
      <S.closeButton src={closeImg} />
    </S.ModalHeaderWrapper>
  );
};

export default ModalHeader;
