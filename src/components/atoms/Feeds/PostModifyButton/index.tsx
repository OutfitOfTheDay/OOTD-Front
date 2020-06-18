import React from 'react';
import * as S from './style';

interface Props {
  fontSize: number;
}
const PostModifyButton: React.FC<Props> = ({ fontSize }) => {
  return (
    <S.PostModifyButtonWrapper>
      <S.PostModifyButton fontSize={fontSize}>수정</S.PostModifyButton>
      <S.PostModifyButton fontSize={fontSize}>삭제</S.PostModifyButton>
    </S.PostModifyButtonWrapper>
  );
};
export default PostModifyButton;
