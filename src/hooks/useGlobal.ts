import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { rootState } from '../data/index';
import {
  getFaceBookLogin,
  getGoogleLogin,
  setLogOut,
} from '../data/modules/Global/index';

export default function useGlobal() {
  const isLogin = useSelector(
    (state: rootState) => state.globalReducer.isLogin,
  );
  const dispatch = useDispatch();
  const onGetFacebookLogin = useCallback(() => dispatch(getFaceBookLogin()), [
    dispatch,
  ]);

  const onGetGoogleLogin = useCallback(() => dispatch(getGoogleLogin()), [
    dispatch,
  ]);

  const onSetLogout = useCallback(() => dispatch(setLogOut()), [dispatch]);

  return {
    isLogin,
    onGetFacebookLogin,
    onGetGoogleLogin,
    onSetLogout,
  };
}
