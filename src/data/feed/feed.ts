import * as apiTypes from '../api/apiTypes';

export const GET_FEED = 'GET_FEED' as const;
export const GET_FEED_SUCCESS = 'GET_FEED_SUCCESS';
export const GET_FEED_FAILURE = 'GET_FEED_FAILURE';
export const GET_MYPAGE_FEED = 'GET_MYPAGE_FEED' as const;
export const GET_MYPAGE_FEED_SUCCESS = 'GET_MYPAGE_FEED_SUCCESS';
export const GET_MYPAGE_FEED_FAILURE = 'GET_MYPAGE_FEED_FAILURE';
export const GET_MYPAGE_TAG_FEED = 'GET_MYPAGE_TAG_FEED' as const;
export const GET_MYPAGE_TAG_FEED_SUCCESS = 'GET_MYPAGE_TAG_FEED_SUCCESS';
export const GET_MYPAGE_TAG_FEED_FAILURE = 'GET_MYPAGE_TAG_FEED_FAILURE';
export const DELETE_POST = 'DELETE_POST' as const;
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS' as const;
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE' as const;
export const GET_POST_INDEX = 'GET_POST_INDEX' as const;
export const SET_IS_MYPAGE = 'SET_IS_MYPAGE' as const;

export const getFeed = (feedRequestParams: apiTypes.FeedRequestParams) => ({
  type: GET_FEED,
  payload: feedRequestParams,
});

export const getMypageFeed = (token: string) => ({
  type: GET_MYPAGE_FEED,
  payload: { token },
});
export const deletePost = (postId: string, token: string) => ({
  type: DELETE_POST,
  payload: { postId, token },
});

export const getMypageTagFeed = (token: string) => ({
  type: GET_MYPAGE_TAG_FEED,
  payload: { token },
});

export const getPostIndex = (postIndex: number) => ({
  type: GET_POST_INDEX,
  payload: postIndex,
});

export const setIsMypage = (isMypage: boolean) => ({
  type: SET_IS_MYPAGE,
  payload: isMypage,
});

export interface FeedAsyncActionType {
  type: typeof GET_FEED_SUCCESS | typeof GET_FEED_FAILURE;
  payload: any;
}

export interface GetMypageFeed {
  type:
    | typeof GET_MYPAGE_FEED
    | typeof GET_MYPAGE_FEED_FAILURE
    | typeof GET_MYPAGE_FEED_SUCCESS;
  payload: {
    token: string;
    feedData?: apiTypes.FeedListType[];
  };
}

export interface GetMypageTagFeed {
  type:
    | typeof GET_MYPAGE_TAG_FEED
    | typeof GET_MYPAGE_TAG_FEED_FAILURE
    | typeof GET_MYPAGE_TAG_FEED_SUCCESS;
  payload: {
    token: string;
    feedData?: apiTypes.FeedListType[];
  };
}

export interface DeletePost {
  type:
    | typeof DELETE_POST
    | typeof DELETE_POST_SUCCESS
    | typeof DELETE_POST_FAILURE;
  payload: {
    token: string;
    postId: string;
    deletePostStatus?: 0 | 200 | 403 | 500;
  };
}

export type FeedAction =
  | ReturnType<typeof getFeed>
  | ReturnType<typeof getPostIndex>
  | FeedAsyncActionType
  | ReturnType<typeof deletePost>
  | DeletePost;
export type MypageAction =
  | GetMypageFeed
  | GetMypageTagFeed
  | ReturnType<typeof getMypageTagFeed>
  | ReturnType<typeof setIsMypage>;

export interface FeedState {
  feed: apiTypes.FeedListType[];
  postIndex: number;
  feedRequestParams: apiTypes.FeedRequestParams;
  isMypage: boolean;
  reRenderCount: number;
  postId: string;
  status: 0 | 200 | 403 | 500;
}

const initialState: FeedState = {
  feed: [
    {
      post: {
        _id: '0',
        content: 'OOTD',
        likeN: 0,
        cmtN: 0,
        pictures: [''],
        date: 'yyyy.mm.dd',
        weather: {
          status: 1,
          temp: 0,
        },
        userId: '',
      },
      user: {
        userName: 'OOTD',
        profile: '',
        likedId: [],
      },
    },
  ],
  postIndex: 0,
  feedRequestParams: {
    sortN: 1,
    status: 1,
    temp: 0,
  },
  isMypage: true,
  reRenderCount: 0,
  postId: '',
  status: 0,
};

export default function feed(
  state = initialState,
  action: FeedAction | MypageAction,
): FeedState {
  switch (action.type) {
    case GET_FEED:
      return { ...state, feedRequestParams: action.payload };
    case GET_FEED_SUCCESS:
      return { ...state, feed: action.payload };
    case GET_POST_INDEX:
      return { ...state, postIndex: action.payload };
    case GET_MYPAGE_FEED:
      return { ...state };
    case GET_MYPAGE_FEED_SUCCESS:
      return { ...state, feed: action.payload.feedData };
    case GET_MYPAGE_TAG_FEED:
      return { ...state };
    case GET_MYPAGE_TAG_FEED_SUCCESS:
      return { ...state, feed: action.payload.feedData };
    case SET_IS_MYPAGE:
      return { ...state, isMypage: action.payload };
    case DELETE_POST:
      return { ...state, postId: action.payload.postId };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        reRenderCount: state.reRenderCount + 1,
        status: action.payload.deletePostStatus,
      };
    default:
      return state;
  }
}
