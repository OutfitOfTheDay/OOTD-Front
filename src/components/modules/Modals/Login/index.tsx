import React from 'react';
import { GoogleLogin } from 'react-google-login';

import * as S from './style';
import { modal } from '../../../../assets/index';
import { ModalOverlay, ModalContentWrapper, ModalHeader } from 'atoms/modals';
import useGlobal from '../../../../hooks/useGlobal';
import * as apiTypes from '../../../../data/api/apiTypes';

const Login: React.FC = () => {
  const { onGetFacebookLogin, onGetGoogleLogin } = useGlobal();

  const responseGoogle = (res: apiTypes.loginOauthResposeType) => {
    console.log(res);
    const loginReqParams: apiTypes.LoginReqParamsType = {
      userId: res.profileObj.googleId,
      userName: res.profileObj.name,
      accessToken: res.accessToken,
    };
    onGetGoogleLogin(loginReqParams);
  };
  const responseFailure = (err: any) => {
    console.error(err);
  };

  const modalContent = (
    <>
      <ModalHeader ModalName="로그인" isLogin={true} />
      <S.LoginButtonsWrapper>
        <GoogleLogin
          clientId="268802265304-i0ian5nip29tu3k5et7gn22p1nai5f7n.apps.googleusercontent.com"
          buttonText="구글로 로그인하기"
          onSuccess={responseGoogle}
          onFailure={responseFailure}
        />
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
