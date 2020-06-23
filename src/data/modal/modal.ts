const CHANGE_MODAL = 'modal/CHANGE_MODAL' as const;
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

type ModalAction = ReturnType<typeof changeModal>;

export interface ModalState {
  modalType: ModalTypes;
}

const initialState: ModalState = {
  modalType: ModalTypes.none,
};

function modal(state = initialState, action: ModalAction): ModalState {
  switch (action.type) {
    case CHANGE_MODAL:
      return { ...state, modalType: action.payload };
    default:
      return state;
  }
}

export default modal;
