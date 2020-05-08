import React from 'react';
import ModalContentWrapper from '../../atoms/ModalContentWrapper/ModalContentWrapper';
import ModalButtonWrapper from '../../modules/ModalButtonWrapper/ModalButtonWrapper';
import ModalHeader from '../../modules/ModalHeader/ModalHeader';
import ModalOverlay from '../../atoms/ModalOverlay/ModalOverlay';
const DeletePost: React.FC = () => {
  let modalContnet = (
    <>
      <ModalHeader ModalName="스타일을 삭제하시겠어요?" />
      <p>삭제한 스타일은 복구할 수 없습니다.</p>
      <ModalButtonWrapper buttonName="삭제" />
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
