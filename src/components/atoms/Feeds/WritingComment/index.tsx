import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

import * as S from './style';
import useComment from '../../../../hooks/useComment';
import usePost from 'src/hooks/usePost';

interface Props {
  postId: string;
}

const WritingComment: React.FC<Props> = ({ postId }) => {
  const [comment, setComment] = useState('');
  const { onAddComment } = useComment();

  const addComment = () => {
    if (comment.length > 0) {
      onAddComment(comment, postId);
    }
    setComment('');
  };

  const addCommentKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addComment();
    }
  };
  const onChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  return (
    <S.CommentWritingWrapper>
      <S.WritingCommentInput
        placeholder="댓글달기"
        value={comment}
        onChange={onChangeComment}
        onKeyPress={(e) => addCommentKeyPress(e)}
      ></S.WritingCommentInput>
      <S.PostingCommentButton onClick={() => addComment()} comment={comment}>
        게시
      </S.PostingCommentButton>
    </S.CommentWritingWrapper>
  );
};

export default WritingComment;
