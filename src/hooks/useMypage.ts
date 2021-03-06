import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { rootState } from '../data/index';
import {
  changeProfileImg,
  changeProfileName,
  editProfile,
  getProfile,
} from '../data/modules/Mypage';

export default function useMypage() {
  const profileImg = useSelector((state: rootState) => state.mypageReducer.img);
  const profileName = useSelector(
    (state: rootState) => state.mypageReducer.name,
  );
  const isChanged = useSelector(
    (state: rootState) => state.mypageReducer.isChanged,
  );

  const dispatch = useDispatch();

  const onChangeProfileImg = useCallback(
    (img: File | string) => dispatch(changeProfileImg(img)),
    [dispatch],
  );
  const onChangeProfileName = useCallback(
    (name: string) => dispatch(changeProfileName(name)),
    [dispatch],
  );
  const onGetProfile = useCallback(
    (token: string) => dispatch(getProfile(token)),
    [dispatch],
  );
  const onEditProfile = useCallback(
    (img: File | string, name: string, token: string) =>
      dispatch(
        editProfile({
          img,
          name,
          token,
        }),
      ),
    [dispatch],
  );

  return {
    isChanged,
    onChangeProfileImg,
    onChangeProfileName,
    onEditProfile,
    onGetProfile,
    profileImg,
    profileName,
  };
}
