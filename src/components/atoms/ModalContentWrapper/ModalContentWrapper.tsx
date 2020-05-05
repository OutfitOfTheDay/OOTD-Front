import React, { ReactNode } from 'react';
import * as S from './style';
import ModalHeader from '../../modules/ModalHeader/ModalHeader';
import ModalButtonWrapper from '../../modules/ModalButtonWrapper/ModalButtonWrapper';

interface Props {
  contents: ReactNode;
}

const ModalContentWrapper: React.FC<Props> = ({ contents }) => {
  return <S.ModalWrapper>{contents}</S.ModalWrapper>;
};

export default ModalContentWrapper;
