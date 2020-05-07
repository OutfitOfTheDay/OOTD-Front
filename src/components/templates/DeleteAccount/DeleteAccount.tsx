import React from 'react';
import ModalContentWrapper from '../../atoms/ModalContentWrapper/ModalContentWrapper';
import ModalButtonWrapper from '../../modules/ModalButtonWrapper/ModalButtonWrapper';
import ModalHeader from '../../modules/ModalHeader/ModalHeader';
import ModalOverlay from '../../atoms/ModalOverlay/ModalOverlay';
const DeleteAccount = () => {
  let modalContnet = (
    <>
      <ModalHeader ModalName="정말 회원을 탈퇴하시겠어요?" />
      {'asfdasfsf'}
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
