import * as apiTypes from '../api/apiTypes';

export const LIKE_POST = 'LIKE_POST' as const;
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS' as const;
export const LIKE_POST_FAILURE = 'LIKE_POST_SUCCESS' as const;

export const GET_LIKED_ID = 'GET_LIKED_ID' as const;
export const GET_LIKED_ID_SUCCESS = 'GET_LIKED_ID_SUCCESS' as const;
export const GET_LIKED_ID_FAILURE = 'GET_LIKED_ID_FAILURE' as const;

export const like = (postId: string, token: string) => ({
  type: LIKE_POST,
  payload: { postId, token },
});

export const getLikedId = (token: string) => ({
  type: GET_LIKED_ID,
  payload: { token },
});

export interface LikePostAsyncActionType {
  type: typeof LIKE_POST_SUCCESS | typeof LIKE_POST_FAILURE;
  payload: any;
}

export interface GetLikedIdType {
  type:
    | typeof GET_LIKED_ID
    | typeof GET_LIKED_ID_SUCCESS
    | typeof GET_LIKED_ID_FAILURE;
  payload: { token: string; likedId: string[] };
}

export type LikePostAction =
  | ReturnType<typeof like>
  | LikePostAsyncActionType
  | GetLikedIdType;

export interface LikePostState {
  LikeStatus: 0 | 200 | 400 | 500;
  reRenderCount: number;
  postId: string;
  likedId: string[];
}

const initialState: LikePostState = {
  postId: '',
  LikeStatus: 0,
  reRenderCount: 0,
  likedId: [''],
};

export default function LikePostReducer(
  state = initialState,
  action: LikePostAction,
): LikePostState {
  switch (action.type) {
    case LIKE_POST:
      return { ...state };
    case LIKE_POST_SUCCESS:
      return { ...state, reRenderCount: state.reRenderCount + 1 };
    case LIKE_POST_FAILURE:
      return { ...state, LikeStatus: action.payload };
    case GET_LIKED_ID:
      return { ...state };
    case GET_LIKED_ID_SUCCESS:
      return { ...state, likedId: action.payload.likedId };
    default:
      return state;
  }
}
