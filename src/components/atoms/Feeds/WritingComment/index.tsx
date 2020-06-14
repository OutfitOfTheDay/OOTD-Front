import React, { useState, ChangeEvent } from 'react';

import * as S from './style';
import useComment from '../../../../hooks/useComment';
import usePost from 'src/hooks/usePost';

interface Props {
  postId: string;
}

const WritingComment: React.FC<Props> = ({ postId }) => {
  const [comment, setComment] = useState('');
  const { postIndex } = usePost();
  const { onAddComment } = useComment();

  const addComment = () => {
    onAddComment(comment, postId);
  };
  const onChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };
  return (
    <S.CommentWritingWrapper>
      <S.WritingCommentInput
        placeholder="댓글달기"
        onChange={onChangeComment}
      ></S.WritingCommentInput>
      <S.PostingCommentButton onClick={() => addComment()}>
        게시
      </S.PostingCommentButton>
    </S.CommentWritingWrapper>
  );
};

export default WritingComment;
