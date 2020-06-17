import React, { useEffect } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import usePost from '../../../../hooks/usePost';

interface Props {
  content: string;
  postIndex: number;
}

const PostContent: React.FC<Props> = ({ content, postIndex }) => {
  const { onGetPostIndex } = usePost();
  return (
    <S.PostContentWrapper>
      <S.PostContent>{content}</S.PostContent>
      <S.ShowDetailPostBtn onClick={() => onGetPostIndex(postIndex)}>
        <Link to="/detailPost">게시글 전체보기</Link>
      </S.ShowDetailPostBtn>
    </S.PostContentWrapper>
  );
};

export default PostContent;
