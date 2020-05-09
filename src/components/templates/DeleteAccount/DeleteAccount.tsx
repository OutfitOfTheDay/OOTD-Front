import React from 'react';
import ModalContentWrapper from '../../atoms/modals/ModalContentWrapper/ModalContentWrapper';
import ModalButtonWrapper from '../../modules/ModalButtonWrapper/ModalButtonWrapper';
import ModalHeader from '../../modules/ModalHeader/ModalHeader';
import ModalOverlay from '../../atoms/modals/ModalOverlay/ModalOverlay';
const DeleteAccount: React.FC = () => {
  let modalContnet = (
    <>
      <ModalHeader ModalName="정말 회원을 탈퇴하시겠어요?" />
      <p>회원님의 정보와 스타일이 모두 삭제됩니다.</p>
      <p>삭제된 정보와 스타일은 복구할 수 없습니다.</p>
      <ModalButtonWrapper buttonName="탈퇴" />
    </>
  );
  return (
    <>
      <ModalOverlay />
      <ModalContentWrapper
        modalHeight="11.25rem"
        modalWidth="25rem"
        contents={modalContnet}
      />
    </>
  );
};

export default DeleteAccount;
