const CHANGE_MODAL = 'modal/CHANGE_MODAL' as const;
const GET_POST_ID = 'GET_POST_ID' as const;
export enum ModalTypes {
  none = 'none',
  LogIn = 'LogIn',
  DeletePost = 'DeletePost',
  DeleteAccount = 'DeleteAccount',
}

export const changeModal = (modalType: ModalTypes) => ({
  type: CHANGE_MODAL,
  payload: modalType,
});

export const getPostId = (postId: string) => ({
  type: GET_POST_ID,
  payload: postId,
});

type ModalAction =
  | ReturnType<typeof changeModal>
  | ReturnType<typeof getPostId>;

export interface ModalState {
  modalType: ModalTypes;
  postId: string;
}

const initialState: ModalState = {
  modalType: ModalTypes.none,
  postId: '0',
};

function modal(state = initialState, action: ModalAction): ModalState {
  switch (action.type) {
    case CHANGE_MODAL:
      return { ...state, modalType: action.payload };
    case GET_POST_ID:
      return { ...state, postId: action.payload };
    default:
      return state;
  }
}

export default modal;
