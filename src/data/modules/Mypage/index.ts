const CHANGE_PROFILE_IMG = 'CHANGE_PROFILE_IMG';
const CHANGE_PROFILE_NAME = 'CHANGE_PROFILE_NAME';
export const GET_PROFILE = 'GET_PROFILE';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';
export const EDIT_PROFILE = 'EDIT_PROFILE';
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const EDIT_PROFILE_FAILURE = 'EDIT_PROFILE_FAILURE';

interface ChangeProfileImg {
  type: typeof CHANGE_PROFILE_IMG;
  payload: {
    img: File | string;
  };
}

interface ChangeProfileName {
  type: typeof CHANGE_PROFILE_NAME;
  payload: {
    name: string;
  };
}

export interface GetProfile {
  type:
    | typeof GET_PROFILE
    | typeof GET_PROFILE_SUCCESS
    | typeof GET_PROFILE_FAILURE;
  payload: {
    userName?: string;
    profile?: File | string;
    getStatus?: number;
    token?: string;
  };
}

export interface EditProfile {
  type:
    | typeof EDIT_PROFILE
    | typeof EDIT_PROFILE_SUCCESS
    | typeof EDIT_PROFILE_FAILURE;
  payload: {
    img?: File | string;
    name?: string;
    editStatus?: 0 | 200 | 400 | 404;
    token?: string;
  };
}

type MypageActions =
  | ChangeProfileImg
  | ChangeProfileName
  | GetProfile
  | EditProfile;

export const changeProfileImg = (img: File | string): ChangeProfileImg => ({
  type: CHANGE_PROFILE_IMG,
  payload: { img },
});

export const changeProfileName = (name: string): ChangeProfileName => ({
  type: CHANGE_PROFILE_NAME,
  payload: {
    name,
  },
});

export const getProfile = (token: string): GetProfile => ({
  payload: { token },
  type: GET_PROFILE,
});

export const editProfile = (payload: {
  img?: File | string;
  name?: string;
  token: string;
}): EditProfile => ({
  payload,
  type: EDIT_PROFILE,
});

interface InitialState {
  editStatus: 0 | 200 | 400 | 404;
  getStatus: 0 | 200 | 400 | 404;
  img: File | string;
  isChanged: boolean;
  name: string;
}

const initialState: InitialState = {
  editStatus: 0,
  getStatus: 0,
  img: null,
  isChanged: false,
  name: '',
};

const mypageReducer = (state = initialState, action: MypageActions) => {
  switch (action.type) {
    case CHANGE_PROFILE_IMG:
      return {
        ...state,
        img: action.payload.img,
        isChanged: true,
      };
    case CHANGE_PROFILE_NAME:
      return {
        ...state,
        isChanged: true,
        name: action.payload.name,
      };
    case GET_PROFILE:
      return {
        ...state,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        name: action.payload.userName,
        img: action.payload.profile,
        getStatus: 200,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        getStatus: action.payload.getStatus,
      };
    case EDIT_PROFILE:
      return {
        ...state,
      };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        editStatus: action.payload.editStatus,
      };
    case EDIT_PROFILE_FAILURE:
      return {
        ...state,
        editStatus: action.payload.editStatus,
      };
    default:
      return state;
  }
};

export default mypageReducer;
