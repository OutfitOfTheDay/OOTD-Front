import React from 'react';

import * as S from './style';
import useFeed from 'src/hooks/useFeed';
import { Link } from 'react-router-dom';
import useModal from 'src/hooks/useModal';
import { ModalTypes } from 'src/data/modal/modal';

interface Props {
  fontSize: number;
  postId: string;
}
const PostModifyButton: React.FC<Props> = ({ fontSize, postId }) => {
  const { isMypage } = useFeed();
  const { onChangeModal, onGetPostId } = useModal();

  const openDeletePost = () => {
    onChangeModal(ModalTypes.DeletePost);
    onGetPostId(postId);
  };

  return (
    <>
      {isMypage ? (
        <S.PostModifyButtonWrapper>
          <S.PostModifyButton fontSize={fontSize}>수정</S.PostModifyButton>
          <S.PostModifyButton fontSize={fontSize} onClick={openDeletePost}>
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
