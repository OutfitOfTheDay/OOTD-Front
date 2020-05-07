import React, { ReactNode } from 'react';
import * as S from './style';
import ModalHeader from '../../modules/ModalHeader/ModalHeader';
import ModalButtonWrapper from '../../modules/ModalButtonWrapper/ModalButtonWrapper';

interface Props {
  contents: ReactNode;
  modalWidth: string;
  modalHeight: string;
}

const ModalContentWrapper: React.FC<Props> = ({
  contents,
  modalWidth,
  modalHeight,
}) => {
  return (
    <S.ModalWrapper modalWidth={modalWidth} modalHeight={modalHeight}>
      {contents}
    </S.ModalWrapper>
  );
};

export default ModalContentWrapper;
