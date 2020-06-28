import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../data/index';
import { changeModal, ModalTypes, getPostId } from '../data/modal/modal';

export default function useModal() {
  const modalType = useSelector((state: StoreState) => state.modal.modalType);
  const postId = useSelector((state: StoreState) => state.modal.postId);
  const dispatch = useDispatch();
  const onChangeModal = useCallback(
    (modalType: ModalTypes) => dispatch(changeModal(modalType)),
    [dispatch],
  );
  const onGetPostId = useCallback(
    (postId: string) => dispatch(getPostId(postId)),
    [dispatch],
  );

  return {
    modalType,
    postId,
    onChangeModal,
    onGetPostId,
  };
}
