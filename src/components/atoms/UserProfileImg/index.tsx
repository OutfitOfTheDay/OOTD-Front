import React from 'react';
import * as S from './style';

interface Props {
  imgURL: string;
  size: number;
}

const UserProfileImg: React.FC<Props> = ({ imgURL, size }) => {
  return <S.useProfileImg src={imgURL} size={size} />;
};

export default UserProfileImg;
