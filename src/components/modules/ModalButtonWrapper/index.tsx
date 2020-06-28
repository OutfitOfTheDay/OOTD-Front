import React from 'react';
import * as S from './style';
import { ModalButton } from '../../atoms/modals/index';
import useFeed from '../../../hooks/useFeed';

interface Props {
  buttonName: string;
  clickEvent?: any;
}

const ModalButtonWrapper: React.FC<Props> = ({ buttonName, clickEvent }) => {
  return (
    <S.ModalButtonWrapper>
      <ModalButton buttonName="취소" />
      <ModalButton
        buttonName={buttonName}
        isCancel={true}
        clickEvent={clickEvent}
      />
    </S.ModalButtonWrapper>
  );
};

export default ModalButtonWrapper;
