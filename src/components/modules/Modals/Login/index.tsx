import React from 'react';
import * as S from './style';
import { modal } from '../../../../assets/index';
import { ModalOverlay, ModalContentWrapper, ModalHeader } from 'atoms/modals';

const Login: React.FC = () => {
  const modalContent = (
    <>
      <ModalHeader ModalName="로그인" isLogin={true} />
      <S.LoginButtonsWrapper>
        <S.AuthButton src={modal.auth_facebook} alt="페이스북 아이콘" />
        <S.AuthButton src={modal.auth_google} alt="구글 아이콘" />
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
        contents={modalContent}
      />
    </>
  );
};
export default Login;
