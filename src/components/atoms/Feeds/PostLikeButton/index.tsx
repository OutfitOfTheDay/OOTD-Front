import React from 'react';
import * as S from './style';
import { feed } from '../../../../assets/index';

const PostLikeButton: React.FC = () => {
  return (
    <S.PostButtonWrapper>
      <S.PostButton src={feed.tag} alt="tagButton" />
      <S.PostButton src={feed.comment} alt="commentButton" />
    </S.PostButtonWrapper>
  );
};

export default PostLikeButton;
