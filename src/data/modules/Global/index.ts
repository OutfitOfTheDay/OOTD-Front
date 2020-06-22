export interface GlobalState {
  isLogin: boolean;
}

const initialState: GlobalState = {
  isLogin: false,
};

const globalReducer = (
  state = initialState,
  action: {
    type: '';
  },
): GlobalState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default globalReducer;
