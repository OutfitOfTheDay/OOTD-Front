import React, { useEffect } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import usePost from '../../../../hooks/usePost';

interface Props {
  content: string;
  postId: number;
}

const PostContent: React.FC<Props> = ({ content, postId }) => {
  const { onGetPostId } = usePost();
  return (
    <S.PostContentWrapper>
      <S.PostContent>{content}</S.PostContent>
      <S.ShowDetailPostBtn onClick={() => onGetPostId(postId)}>
        <Link to="/detailPost">게시글 전체보기</Link>
      </S.ShowDetailPostBtn>
    </S.PostContentWrapper>
  );
};

export default PostContent;
