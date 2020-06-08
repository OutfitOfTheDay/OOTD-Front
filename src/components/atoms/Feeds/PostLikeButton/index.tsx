import React from 'react';
import * as S from './style';
import { feed } from '../../../../assets/index';

interface Props {
  width: string;
  height: string;
}

const PostLikeButton: React.FC<Props> = ({ width, height }) => {
  return (
    <S.PostButtonWrapper>
      <S.PostButton
        src={feed.tag}
        alt="tagButton"
        width={width}
        height={height}
      />
      <S.PostButton
        src={feed.comment}
        alt="commentButton"
        width={width}
        height={height}
      />
    </S.PostButtonWrapper>
  );
};

export default PostLikeButton;
