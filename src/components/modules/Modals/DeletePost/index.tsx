import React from 'react';

import ModalButtonWrapper from '../../ModalButtonWrapper';
import { ModalOverlay, ModalContentWrapper, ModalHeader } from 'atoms/modals';
import useFeed from '../../../../hooks/useFeed';
import useModal from 'src/hooks/useModal';

const DeletePost: React.FC = () => {
  const { onDeletePost } = useFeed();
  const { postId } = useModal();
  const token = localStorage.getItem('token');

  let modalContnet = (
    <>
      <ModalHeader ModalName="스타일을 삭제하시겠어요?" />
      <p>삭제한 스타일은 복구할 수 없습니다.</p>
      <ModalButtonWrapper
        buttonName="삭제"
        clickEvent={() => onDeletePost(postId, token)}
      />
    </>
  );
  return (
    <>
      <ModalOverlay />
      <ModalContentWrapper
        modalHeight="8.75rem"
        modalWidth="20rem"
        contents={modalContnet}
      />
    </>
  );
};

export default DeletePost;
