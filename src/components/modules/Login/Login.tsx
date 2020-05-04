import React from 'react';
import * as S from './style';
import AuthFacebook from '../../../assets/AuthFacebook.jpg';
import AuthGoogle from '../../../assets/AuthGoogle.jpg';
import closeButton from '../../atoms/closeButton/closeButton';
import AuthButton from '../../atoms/AuthButton/AuthButton';
import ModalHeader from '../ModalHeader/ModalHeader';

const Login: React.FC = () => {
  return (
    <S.LoginModalWrapper>
      <ModalHeader ModalName="로그인" />
      <S.LoginButtonsWrapper>
        <AuthButton buttonImage={AuthFacebook} />
        <AuthButton buttonImage={AuthGoogle} />
      </S.LoginButtonsWrapper>
    </S.LoginModalWrapper>
  );
};

export default Login;
