import React from 'react';
import * as S from './style';
import closeImg from '../../../assets/close.jpg';

interface Props {
  isLogin?: boolean;
  ModalName: string;
}
const ModalHeader: React.FC<Props> = ({ isLogin, ModalName }) => {
  return (
    <S.ModalHeaderWrapper isLogin={isLogin}>
      <S.ModalName isLogin={isLogin}>{ModalName}</S.ModalName>
      <S.closeButton src={closeImg} alt="닫는이미지" />
    </S.ModalHeaderWrapper>
  );
};

export default ModalHeader;
