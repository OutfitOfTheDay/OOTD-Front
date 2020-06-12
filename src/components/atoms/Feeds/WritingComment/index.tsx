import React, { useState } from 'react';

import * as S from './style';
import useComment from '../../../../hooks/useComment';

const WritingComment: React.FC = () => {
  return (
    <S.CommentWritingWrapper>
      <S.WritingCommentInput placeholder="댓글달기"></S.WritingCommentInput>
      <S.PostingCommentButton>게시</S.PostingCommentButton>
    </S.CommentWritingWrapper>
  );
};

export default WritingComment;
