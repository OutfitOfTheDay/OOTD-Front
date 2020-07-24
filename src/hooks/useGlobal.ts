import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { rootState } from '../data/index';
import {
  getFaceBookLogin,
  getGoogleLogin,
  setLogOut,
  setIsLogin,
} from '../data/modules/Global/index';
import * as apiTypes from '../data/api/apiTypes';

export default function useGlobal() {
  const isLogin = useSelector(
    (state: rootState) => state.globalReducer.isLogin,
  );

  const dispatch = useDispatch();
  const onGetFacebookLogin = useCallback(() => dispatch(getFaceBookLogin()), [
    dispatch,
  ]);

  const onGetGoogleLogin = useCallback(
    (loginReqParams: apiTypes.LoginReqParamsType) =>
      dispatch(getGoogleLogin(loginReqParams)),
    [dispatch],
  );

  const onSetLogout = useCallback(() => dispatch(setLogOut()), [dispatch]);

  const onSetIsLogin = useCallback(
    (isLogin: boolean) => dispatch(setIsLogin(isLogin)),
    [dispatch],
  );
  return {
    isLogin,
    onSetIsLogin,
    onGetFacebookLogin,
    onGetGoogleLogin,
    onSetLogout,
  };
}
