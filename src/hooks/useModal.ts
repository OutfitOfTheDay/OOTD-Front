import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../data/index';
import { toggleModal, changeModal, ModalTypes } from '../data/modal/modal';

export default function useModal() {

  const modalType = useSelector((state: StoreState) => state.modal.modalType);
  const dispatch = useDispatch();
  const onChangeModal = useCallback(
    (modalType: ModalTypes) => dispatch(changeModal(modalType)),
    [dispatch],
  );

  return {
    modalType,
    onChangeModal,
  };
}
