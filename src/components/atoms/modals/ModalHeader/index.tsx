import React from 'react';
import * as S from './style';
import { modal } from '../../../../assets/index';
import useModal from 'src/hooks/useModal';
import { ModalTypes } from 'src/data/modal/modal';

interface Props {
  isLogin?: boolean;
  ModalName: string;
}
const ModalHeader: React.FC<Props> = ({ isLogin, ModalName }) => {
  const { onChangeModal } = useModal();
  return (
    <S.ModalHeaderWrapper isLogin={isLogin}>
      <S.ModalName isLogin={isLogin}>{ModalName}</S.ModalName>
      <S.closeButton
        src={modal.close}
        alt="닫는이미지"
        onClick={() => onChangeModal(ModalTypes.none)}
      />
    </S.ModalHeaderWrapper>
  );
};

export default ModalHeader;
