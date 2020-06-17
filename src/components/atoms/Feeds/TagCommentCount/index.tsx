import React from 'react';
import * as S from './style';
import usePost from '../../../../hooks/usePost';

interface Props {
  commentCount: number;
  likeCount: number;
  fontSize?: string;
}

const TagCommentCount: React.FC<Props> = ({
  commentCount,
  likeCount,
  fontSize,
}) => {
  return (
    <S.CountWrapper>
      <S.CountInfo fontSize={fontSize}>태그 수 {likeCount}</S.CountInfo>
      <S.CountInfo fontSize={fontSize}>댓글 수 {commentCount}</S.CountInfo>
    </S.CountWrapper>
  );
};

export default TagCommentCount;
