import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { rootState } from '../data/index';
import {
  changeNewImg,
  changeNewName,
  editProfile,
  getProfile,
} from '../data/modules/Mypage';

export default function useMypage() {
  const changedImg = useSelector(
    (state: rootState) => state.mypageReducer.newImg,
  );
  const changedName = useSelector(
    (state: rootState) => state.mypageReducer.newName,
  );
  const profileImg = useSelector((state: rootState) => state.mypageReducer.img);
  const profileName = useSelector(
    (state: rootState) => state.mypageReducer.name,
  );
  const isChanged = useSelector(
    (state: rootState) => state.mypageReducer.isChanged,
  );

  const dispatch = useDispatch();

  const onChangeProfileImg = useCallback(
    (img: File | string) => dispatch(changeNewImg(img)),
    [dispatch],
  );
  const onChangeProfileName = useCallback(
    (name: string) => dispatch(changeNewName(name)),
    [dispatch],
  );
  const onGetProfile = useCallback(
    (token: string) => dispatch(getProfile(token)),
    [dispatch],
  );
  const onEditProfile = useCallback(
    (newImg: File | string, newName: string, token: string) =>
      dispatch(
        editProfile({
          newImg,
          newName,
          token,
        }),
      ),
    [dispatch],
  );

  return {
    changedImg,
    changedName,
    isChanged,
    onChangeProfileImg,
    onChangeProfileName,
    onEditProfile,
    onGetProfile,
    profileImg,
    profileName,
  };
}
