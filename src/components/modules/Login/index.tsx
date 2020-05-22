import React from 'react';
import * as S from './style';
import { modalIcon } from '../../../assets/index';
import {
  ModalOverlay,
  ModalContentWrapper,
  ModalHeader,
} from '../../atoms/modals/index';

const Login: React.FC = () => {
  const modalContnet = (
    <>
      <ModalHeader ModalName="로그인" isLogin={true} />
      <S.LoginButtonsWrapper>
        <S.AuthButton src={modalIcon.AuthFacebook} alt="페이스북 아이콘" />
        <S.AuthButton src={modalIcon.AuthGoogle} alt="구글 아이콘" />
      </S.LoginButtonsWrapper>
    </>
  );
  return (
    <>
      <ModalOverlay />
      <ModalContentWrapper
        isLogin={true}
        modalHeight="17.5rem"
        modalWidth="25rem"
        contents={modalContnet}
      />
    </>
  );
};

export default Login;
