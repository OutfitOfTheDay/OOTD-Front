const ADD_IMG = 'ADD_IMG';
const DELETE_IMG = 'DELETE_IMG';
const CLEAR_UPLOAD_STATUS = 'CLEAR_UPLOAD_STATUS';
const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';
export const UPLOAD_POST = 'UPLOAD_POST';
export const UPLOAD_POST_SUCCESS = 'UPLOAD_POST_SUCCESS';
export const UPLOAD_POST_FAILURE = 'UPLOAD_POST_FAILURE';

export interface AddImg {
  type: typeof ADD_IMG;
  payload: {
    newImg: File;
  };
}

export interface DeleteImg {
  type: typeof DELETE_IMG;
  payload: {
    index: number;
  };
}

export interface ChangeDescription {
  type: typeof CHANGE_DESCRIPTION;
  payload: {
    description: string;
  };
}

export interface UploadPost {
  type:
    | typeof UPLOAD_POST
    | typeof UPLOAD_POST_SUCCESS
    | typeof UPLOAD_POST_FAILURE;
  payload: {
    post?: {
      imgList: File[];
      description: string;
      weather: {
        status: number;
        temp: number;
      };
    };
    uploadStatus?: 0 | 200 | 400 | 401;
    token: string;
  };
}

export interface SetUploadStatus {
  type: typeof CLEAR_UPLOAD_STATUS;
  payload: {
    uploadStatus: 0 | 200 | 400 | 401 | 404;
  };
}

export const addImg = (img: File): AddImg => ({
  type: ADD_IMG,
  payload: {
    newImg: img,
  },
});

export const deleteImg = (index: number): DeleteImg => ({
  type: DELETE_IMG,
  payload: {
    index,
  },
});

export const changeDescription = (description: string): ChangeDescription => ({
  type: CHANGE_DESCRIPTION,
  payload: {
    description,
  },
});

export const clearUploadStatus = () => ({
  type: CLEAR_UPLOAD_STATUS,
});

export const uploadPost = (
  post: {
    imgList: File[];
    description: string;
    weather: {
      status: number;
      temp: number;
    };
  },
  token: string,
): UploadPost => ({
  payload: {
    post,
    token,
  },
  type: UPLOAD_POST,
});

type PostUploadActionTypes =
  | AddImg
  | ChangeDescription
  | DeleteImg
  | UploadPost
  | SetUploadStatus;

interface RootState {
  imgList: File[];
  description: string;
  uploadStatus: 0 | 200 | 400 | 401 | 404;
}

const initialState: RootState = {
  description: '',
  imgList: [],
  uploadStatus: 0,
};

const postUploadReducer = (
  state = initialState,
  action: PostUploadActionTypes,
): RootState => {
  switch (action.type) {
    case ADD_IMG: {
      return {
        ...state,
        imgList: [...state.imgList, action.payload.newImg],
      };
    }
    case DELETE_IMG:
      return {
        ...state,
        imgList: state.imgList.filter(
          (img, index) => index !== action.payload.index,
        ),
      };
    case CHANGE_DESCRIPTION:
      return {
        ...state,
        description: action.payload.description,
      };
    case UPLOAD_POST:
      return {
        ...state,
        uploadStatus: 0,
      };
    case UPLOAD_POST_SUCCESS:
      return {
        ...state,
        uploadStatus: 200,
        imgList: [],
        description: '',
      };
    case UPLOAD_POST_FAILURE:
      return {
        ...state,
        uploadStatus: action.payload.uploadStatus,
      };
    case CLEAR_UPLOAD_STATUS: {
      return {
        ...state,
        uploadStatus: 0,
      };
    }
    default:
      return state;
  }
};

export default postUploadReducer;
