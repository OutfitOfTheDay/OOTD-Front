import React from 'react';
import * as S from './style';
import { ModalButton } from '../../atoms/modals/index';

interface Props {
  buttonName: string;
}

const ModalButtonWrapper: React.FC<Props> = ({ buttonName }) => {
  return (
    <S.ModalButtonWrapper>
      <ModalButton buttonName="취소" />
      <ModalButton buttonName={buttonName} isCancel={true} />
    </S.ModalButtonWrapper>
  );
};

export default ModalButtonWrapper;
