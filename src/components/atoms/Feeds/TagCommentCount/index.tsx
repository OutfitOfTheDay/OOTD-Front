import React from 'react';
import * as S from './style';

interface Props {
  commentCount: number;
  likeCount: number;
}

const TagCommentCount: React.FC<Props> = ({ commentCount, likeCount }) => {
  return (
    <S.CountWrapper>
      <S.CountInfo>태그 수 {likeCount}</S.CountInfo>
      <S.CountInfo>댓글 수 {commentCount}</S.CountInfo>
    </S.CountWrapper>
  );
};

export default TagCommentCount;
