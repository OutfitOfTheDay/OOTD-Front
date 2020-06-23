import React, { ReactNode, useEffect } from 'react';

import DeleteAccount from './DeleteAccount';
import DeletePost from './DeletePost';
import Login from './Login';
import useModal from 'src/hooks/useModal';
import { ModalTypes } from 'src/data/modal/modal';

const Modals: React.FC = () => {
  const { modalType } = useModal();
  const switchShowModal = (modalType: ModalTypes): ReactNode => {
    switch (modalType) {
      case ModalTypes.LogIn:
        return <Login />;
      case ModalTypes.DeletePost:
        return <DeletePost />;
      case ModalTypes.DeleteAccount:
        return <DeleteAccount />;
      default:
        return null;
    }
  };

  return <div>{switchShowModal(modalType)}</div>;
};

export default Modals;
