import React, { useEffect } from 'react';
import * as S from './style';

import { profile } from 'assets/index';
import useMypage from '../../../hooks/useMypage';

interface Props {
  imgURL: string | File;
  size: string;
}

const UserProfileImg: React.FC<Props> = ({ imgURL, size }) => {
  const { onGetProfile } = useMypage();

  useEffect(() => {
    onGetProfile(localStorage.getItem('token'));
  }, []);

  return <S.userProfileImg src={imgURL || profile.default_img} size={size} />;
};

export default UserProfileImg;
