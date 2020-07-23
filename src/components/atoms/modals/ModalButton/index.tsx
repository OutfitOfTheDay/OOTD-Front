import React from 'react';
import * as S from './style';

interface Props {
  isCancel?: boolean;
  buttonName: string;
  clickEvent?: any;
}
const defaultProps: Props = {
  isCancel: false,
  buttonName: '버튼',
  clickEvent: null,
};
const ModalButton: React.FC<Props> = ({ isCancel, buttonName, clickEvent }) => {
  return (
    <S.ModalButton isCancel={isCancel} onClick={clickEvent}>
      {buttonName}
    </S.ModalButton>
  );
};

ModalButton.defaultProps = defaultProps;

export default ModalButton;
