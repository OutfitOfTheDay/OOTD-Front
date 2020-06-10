import React from 'react';
import * as S from './style';

interface Props {
  isCancel?: boolean;
  buttonName: string;
}
const defaultProps: Props = {
  isCancel: false,
  buttonName: '버튼',
};
const ModalButton: React.FC<Props> = ({ isCancel, buttonName }) => {
  return <S.ModalButton isCancel={isCancel}>{buttonName}</S.ModalButton>;
};

ModalButton.defaultProps = defaultProps;

export default ModalButton;
