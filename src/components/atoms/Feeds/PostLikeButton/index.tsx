import React from 'react';
import * as S from './style';
// import { feed } from '../../../../assets/index';
import tag from '../../../../assets/Feed_icon/tag.png';
import comment from '../../../../assets/Feed_icon/comment.png';

const PostLikeButton: React.FC = () => {
  return (
    <S.PostButtonWrapper>
      <S.PostButton src={tag} alt="tagButton" />
      <S.PostButton src={comment} alt="commentButton" />
    </S.PostButtonWrapper>
  );
};

export default PostLikeButton;
