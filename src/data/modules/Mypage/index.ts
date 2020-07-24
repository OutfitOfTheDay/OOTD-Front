const CHANGE_NEW_IMG = 'CHANGE_PROFILE_IMG';
const CHANGE_NEW_NAME = 'CHANGE_PROFILE_NAME';
export const GET_PROFILE = 'GET_PROFILE';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';
export const EDIT_PROFILE = 'EDIT_PROFILE';
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const EDIT_PROFILE_FAILURE = 'EDIT_PROFILE_FAILURE';

interface ChangeNewImg {
  type: typeof CHANGE_NEW_IMG;
  payload: {
    newImg: File | string;
  };
}

interface ChangeNewName {
  type: typeof CHANGE_NEW_NAME;
  payload: {
    newName: string;
  };
}

export interface GetProfile {
  type:
    | typeof GET_PROFILE
    | typeof GET_PROFILE_SUCCESS
    | typeof GET_PROFILE_FAILURE;
  payload: {
    name?: string;
    img?: File | string;
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
    newImg?: File | string;
    newName?: string;
    editStatus?: 0 | 200 | 400 | 404;
    token?: string;
  };
}

type MypageActions = ChangeNewImg | ChangeNewName | GetProfile | EditProfile;

export const changeNewImg = (newImg: File | string): ChangeNewImg => ({
  type: CHANGE_NEW_IMG,
  payload: { newImg },
});

export const changeNewName = (newName: string): ChangeNewName => ({
  type: CHANGE_NEW_NAME,
  payload: {
    newName,
  },
});

export const getProfile = (token: string): GetProfile => ({
  payload: { token },
  type: GET_PROFILE,
});

export const editProfile = (payload: {
  newImg?: File | string;
  newName?: string;
  token: string;
}): EditProfile => ({
  payload,
  type: EDIT_PROFILE,
});

export interface MypageState {
  editStatus: 0 | 200 | 400 | 404;
  getStatus: 0 | 200 | 400 | 404;
  img: File | string;
  isChanged: boolean;
  name: string;
  newImg: File | string;
  newName: string;
}

const initialState: MypageState = {
  editStatus: 0,
  getStatus: 0,
  img: null,
  isChanged: false,
  name: '',
  newImg: null,
  newName: '',
};

const mypageReducer = (state = initialState, action: MypageActions) => {
  switch (action.type) {
    case CHANGE_NEW_IMG:
      return {
        ...state,
        newImg: action.payload.newImg,
        isChanged: true,
      };
    case CHANGE_NEW_NAME:
      return {
        ...state,
        isChanged: true,
        newName: action.payload.newName,
      };
    case GET_PROFILE:
      return {
        ...state,
      };
    case GET_PROFILE_SUCCESS: {
      return {
        ...state,
        name: action.payload.name,
        img: action.payload.img,
        getStatus: 200,
        newImg: action.payload.img,
        newName: action.payload.name,
      };
    }
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
        isChanged: false,
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
