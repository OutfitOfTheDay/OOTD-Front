import React, { ReactNode } from 'react';
import * as S from './style';
import ModalHeader from '../ModalHeader';
import ModalButtonWrapper from '../../../modules/ModalButtonWrapper';

interface Props {
  isLogin?: boolean;
  contents: ReactNode;
  modalWidth: string;
  modalHeight: string;
}
const defaultProps: Props = {
  isLogin: false,
  contents: {},
  modalWidth: '20rem',
  modalHeight: '17rem',
};
const ModalContentWrapper: React.FC<Props> = ({
  isLogin,
  contents,
  modalWidth,
  modalHeight,
}) => {
  return (
    <S.ModalWrapper
      isLogin={isLogin}
      modalWidth={modalWidth}
      modalHeight={modalHeight}
    >
      {contents}
    </S.ModalWrapper>
  );
};
ModalContentWrapper.defaultProps = defaultProps;
export default ModalContentWrapper;
