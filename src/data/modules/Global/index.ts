export const SET_IS_LOGIN = 'SET_IS_LOGIN' as const;

//=== login
export const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN' as const;
export const FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS' as const;
export const FACEBOOK_LOGIN_FAILURE = 'FACEBOOK_LOGIN_FAILURE' as const;

export const GOOGLE_LOGIN = 'GOOGLE_LOGIN' as const;
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS' as const;
export const GOOGLE_LOGIN_FAILURE = 'GOOGLE_LOGIN_FAILURE' as const;

export const LOG_OUT = 'LOG_OUT' as const;
export const LOG_OUT_SUCCESS = 'LOG_IN_SUCCESS' as const;
export const LOG_OUT_FAILURE = 'LOG_OUT_SUCCESS' as const;

export const setIsLogin = (isLogin: boolean) => ({
  type: SET_IS_LOGIN,
  payload: isLogin,
});

export const getFaceBookLogin = () => ({
  type: FACEBOOK_LOGIN,
});

export const getGoogleLogin = () => ({
  type: GOOGLE_LOGIN,
});

export const setLogOut = () => ({
  type: LOG_OUT,
});

export interface LoginAsyncAction {
  type:
    | typeof FACEBOOK_LOGIN_SUCCESS
    | typeof FACEBOOK_LOGIN_FAILURE
    | typeof GOOGLE_LOGIN_SUCCESS
    | typeof GOOGLE_LOGIN_FAILURE
    | typeof LOG_OUT_SUCCESS
    | typeof LOG_OUT_FAILURE;
  payload: any;
}

export type globalAction =
  | ReturnType<typeof setIsLogin>
  | ReturnType<typeof getFaceBookLogin>
  | ReturnType<typeof getGoogleLogin>
  | ReturnType<typeof setLogOut>
  | LoginAsyncAction;

//====
export interface GlobalState {
  isLogin: boolean;
  loginStatus: number;
  oauthPage: any;
}

const initialState: GlobalState = {
  isLogin: false,
  loginStatus: 0,
  oauthPage: 0,
};

const globalReducer = (
  state = initialState,
  action: globalAction,
): GlobalState => {
  switch (action.type) {
    //=== login
    case SET_IS_LOGIN:
      return { ...state, isLogin: action.payload };
    case FACEBOOK_LOGIN:
      return { ...state };
    case FACEBOOK_LOGIN_SUCCESS:
      return { ...state, isLogin: true, loginStatus: action.payload };
    case GOOGLE_LOGIN:
      return { ...state };
    case GOOGLE_LOGIN_SUCCESS:
      return { ...state, isLogin: true };
    case LOG_OUT:
      return { ...state };
    case LOG_OUT_SUCCESS:
      return { ...state, isLogin: false };
    //=== 1
    default:
      return state;
  }
};

export default globalReducer;
