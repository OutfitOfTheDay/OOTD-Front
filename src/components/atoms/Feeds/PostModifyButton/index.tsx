import React from 'react';

import * as S from './style';
import useFeed from 'src/hooks/useFeed';
import { Link } from 'react-router-dom';

interface Props {
  fontSize: number;
  postId: string;
}
const PostModifyButton: React.FC<Props> = ({ fontSize, postId }) => {
  const { isMypage, onDeletePost } = useFeed();
  return (
    <>
      {isMypage ? (
        <S.PostModifyButtonWrapper>
          <S.PostModifyButton fontSize={fontSize}>수정</S.PostModifyButton>
          <Link to="/mypage">
            <S.PostModifyButton
              fontSize={fontSize}
              onClick={() => onDeletePost(postId)}
            >
              삭제
            </S.PostModifyButton>
          </Link>
        </S.PostModifyButtonWrapper>
      ) : (
        <></>
      )}
    </>
  );
};
export default PostModifyButton;
