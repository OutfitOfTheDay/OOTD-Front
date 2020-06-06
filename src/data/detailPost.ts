const GET_POST_INFO = 'GET_POST_INFO' as const;
const GET_POST_ID = 'GET_POST_ID' as const;
const GET_PHOTO_INDEX = 'GET_PHOTO_INDEX' as const;
const INCREASE_INDEX = 'INCREASE_INDEX' as const;
const DECREASE_INDEX = 'DECREASE_INDEX' as const;

export const getPostInfo = (postInfo: {}) => ({
  type: GET_POST_INFO,
  payload: postInfo,
});

export const getPostId = (postId: number) => ({
  type: GET_POST_ID,
  payload: postId,
});

export const getPhotoIndex = (photoIndex: number) => ({
  type: GET_PHOTO_INDEX,
  payload: photoIndex,
});

export const increaseIndex = () => ({
  type: INCREASE_INDEX,
});

export const decreaseIndex = () => ({
  type: DECREASE_INDEX,
});

export type DetailPostAction =
  | ReturnType<typeof getPostInfo>
  | ReturnType<typeof getPostId>
  | ReturnType<typeof getPhotoIndex>
  | ReturnType<typeof increaseIndex>
  | ReturnType<typeof decreaseIndex>;

export interface DetailPostState {
  postId: number;
  photoIndex: number;
}

const InitialState: DetailPostState = {
  postId: 0,
  photoIndex: 0,
};

export default function detailPost(
  state: DetailPostState = InitialState,
  action: DetailPostAction,
) {
  switch (action.type) {
    case GET_POST_ID:
      return { ...state, postId: action.payload };
    case GET_PHOTO_INDEX:
      return { ...state, photoIndex: action.payload };
    case INCREASE_INDEX:
      return { ...state, photoIndex: state.photoIndex + 1 };
    case DECREASE_INDEX:
      return { ...state, photoIndex: state.photoIndex - 1 };
  }
}
