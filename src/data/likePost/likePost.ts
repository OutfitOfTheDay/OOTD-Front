export const LIKE_POST = 'LIKE_POST' as const;
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS' as const;
export const LIKE_POST_FAILURE = 'LIKE_POST_SUCCESS' as const;

export const like = (postId: string) => ({
  type: LIKE_POST,
  payload: postId,
});

export interface LikePostAsyncActionType {
  type: typeof LIKE_POST_SUCCESS | typeof LIKE_POST_FAILURE;
  payload: any;
}

export type LikePostAction = ReturnType<typeof like> | LikePostAsyncActionType;

export interface LikePostState {
  LikeStatus: 0 | 200 | 400 | 500;
  reRenderCount: number;
}

const initialState: LikePostState = {
  LikeStatus: 0,
  reRenderCount: 0,
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
    default:
      return state;
  }
}
