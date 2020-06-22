import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { rootState } from '../data/index';

export default function useGlobal() {
  const isLogin = useSelector(
    (state: rootState) => state.globalReducer.isLogin,
  );

  return {
    isLogin,
  };
}
