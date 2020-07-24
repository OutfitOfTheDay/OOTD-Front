import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';

import * as S from './style';
import { modal } from '../../../../assets/index';
import { ModalOverlay, ModalContentWrapper, ModalHeader } from 'atoms/modals';
import useGlobal from '../../../../hooks/useGlobal';
import useModal from '../../../../hooks/useModal';
import * as apiTypes from '../../../../data/api/apiTypes';
import { ModalTypes } from 'src/data/modal/modal';

const Login: React.FC = () => {
  const { onGetFacebookLogin, onGetGoogleLogin } = useGlobal();
  const { onChangeModal } = useModal();
  const token = localStorage.getItem('token');
  const responseGoogle = (res: apiTypes.loginOauthResposeType) => {
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

  useEffect(() => {
    if (token !== null) {
      onChangeModal(ModalTypes.none);
    }
  }, [token]);

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
