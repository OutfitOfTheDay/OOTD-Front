import React from 'react';
import * as S from './style';
import UserProfileImg from '../../UserProfileImg/index';

interface Props {
  userProfileImg: string;
  userName: string;
  commentDate: string;
  comment: string;
}

const CommentItem: React.FC<Props> = ({
  userProfileImg,
  userName,
  commentDate,
  comment,
}) => {
  return (
    <S.CommentItem>
      <UserProfileImg imgURL={userProfileImg} size="1.875rem" />
      <S.CommentInfoWrapper>
        <S.UserInfoWrapper>
          <S.UserName>{userName}</S.UserName>
          <S.CommentDate>{commentDate}</S.CommentDate>
        </S.UserInfoWrapper>
        <S.Comment>{comment}</S.Comment>
      </S.CommentInfoWrapper>
    </S.CommentItem>
  );
};

export default CommentItem;
