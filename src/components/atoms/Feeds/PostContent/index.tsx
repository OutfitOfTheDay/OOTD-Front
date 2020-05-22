import React from 'react';
import * as S from './style';

interface Props {
  content: string;
}

const PostContent: React.FC<Props> = ({ content }) => {
  return (
    <S.PostContentWrapper>
      <S.PostContent>{content}</S.PostContent>
      <S.ShowDetailPostBtn>게시글 전체보기</S.ShowDetailPostBtn>
    </S.PostContentWrapper>
  );
};

export default PostContent;
