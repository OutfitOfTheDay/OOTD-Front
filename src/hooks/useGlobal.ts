import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { rootState } from '../data/index';
import { handleLoginModal } from '../data/modules/global';

export default function useGlobal() {
  const isLogin = useSelector(
    (state: rootState) => state.globalReducer.isLogin,
  );

  return {
    isLogin,
  };
}
