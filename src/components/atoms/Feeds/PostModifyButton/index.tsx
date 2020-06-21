import React from 'react';

import * as S from './style';
import useFeed from 'src/hooks/useFeed';

interface Props {
  fontSize: number;
}
const PostModifyButton: React.FC<Props> = ({ fontSize }) => {
  const { isMypage } = useFeed();
  return (
    <>
      {isMypage ? (
        <S.PostModifyButtonWrapper>
          <S.PostModifyButton fontSize={fontSize}>수정</S.PostModifyButton>
          <S.PostModifyButton fontSize={fontSize}>삭제</S.PostModifyButton>
        </S.PostModifyButtonWrapper>
      ) : (
        <></>
      )}
    </>
  );
};
export default PostModifyButton;
