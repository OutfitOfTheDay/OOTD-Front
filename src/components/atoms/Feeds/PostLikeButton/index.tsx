import React from 'react';
import * as S from './style';

const PostLikeButton: React.FC = () => {
  return (
    <S.PostButtonWrapper>
      <S.PostButton />
      <S.PostButton />
    </S.PostButtonWrapper>
  );
};

export default PostLikeButton;
