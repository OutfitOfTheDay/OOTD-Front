import React from 'react';

import * as S from './style';
import useFeed from 'src/hooks/useFeed';
import useModal from 'src/hooks/useModal';
import { ModalTypes } from 'src/data/modal/modal';

interface Props {
  fontSize: number;
}
const PostModifyButton: React.FC<Props> = ({ fontSize }) => {
  const { isMypage } = useFeed();
  const { onChangeModal } = useModal();

  return (
    <>
      {isMypage ? (
        <S.PostModifyButtonWrapper>
          <S.PostModifyButton fontSize={fontSize}>수정</S.PostModifyButton>
          <S.PostModifyButton
            fontSize={fontSize}
            onClick={() => onChangeModal(ModalTypes.DeletePost)}
          >
            삭제
          </S.PostModifyButton>
        </S.PostModifyButtonWrapper>
      ) : (
        <></>
      )}
    </>
  );
};
export default PostModifyButton;
