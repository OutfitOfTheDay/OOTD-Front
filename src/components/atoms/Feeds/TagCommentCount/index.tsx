import React from 'react';
import * as S from './style';

interface Props {}

const TagCommentCount: React.FC<Props> = () => {
  const cmtN: number = 2002;
  const likeN: number = 1002;
  return (
    <S.CountWrapper>
      <S.CountInfo>태그 수 {likeN}</S.CountInfo>
      <S.CountInfo>댓글 수 {cmtN}</S.CountInfo>
    </S.CountWrapper>
  );
};

export default TagCommentCount;
