import React from 'react';
import * as S from './style';
import AuthFacebook from '../../../assets/AuthFacebook.png';
import AuthGoogle from '../../../assets/AuthGoogle.png';
import ModalHeader from '../../modules/ModalHeader';
import ModalOverlay from '../../atoms/modals/ModalOverlay';
import ModalContentWrapper from '../../atoms/modals/ModalContentWrapper';

const Login: React.FC = () => {
  const modalContnet = (
    <>
      <ModalHeader ModalName="로그인" isLogin={true} />
      <S.LoginButtonsWrapper>
        <S.AuthButton src={AuthFacebook} alt="페이스북 아이콘" />
        <S.AuthButton src={AuthGoogle} alt="구글 아이콘" />
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
