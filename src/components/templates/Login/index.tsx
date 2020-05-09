import React from 'react';
import * as S from './style';
import AuthFacebook from '../../../assets/AuthFacebook.jpg';
import AuthGoogle from '../../../assets/AuthGoogle.jpg';
import closeButton from '../../atoms/closeButton/closeButton';
import AuthButton from '../../atoms/modals/AuthButton';
import ModalHeader from '../../modules/ModalHeader';
import ModalOverlay from '../../atoms/modals/ModalOverlay';
import ModalContentWrapper from '../../atoms/modals/ModalContentWrapper';

const Login: React.FC = () => {
  const modalContnet = (
    <>
      <ModalHeader ModalName="로그인" isLogin={true} />
      <S.LoginButtonsWrapper>
        <AuthButton buttonImage={AuthFacebook} />
        <AuthButton buttonImage={AuthGoogle} />
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
