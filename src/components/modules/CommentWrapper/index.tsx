import React from 'react';

import * as S from './style';
import { CommentItem } from '../../atoms/Feeds/index';
import useComment from '../../../hooks/useComment';

const CommentWrapper: React.FC = () => {
  const { commentList } = useComment();

  return (
    <>
      {commentList.length != null && (
        <S.CommentWrapper>
          {commentList.map((commentDataItem, index) => {
            return (
              <CommentItem
                key={commentDataItem.comment._id}
                userProfileImg={commentDataItem.user.profile}
                userName={commentDataItem.user.userName}
                commentDate={commentDataItem.comment.date}
                comment={commentDataItem.comment.text}
              />
            );
          })}
        </S.CommentWrapper>
      )}
    </>
  );
};

export default CommentWrapper;
