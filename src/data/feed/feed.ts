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

export const getMypageFeed = () => ({
  type: GET_MYPAGE_FEED,
});
export const deletePost = (postId: string) => ({
  type: DELETE_POST,
  payload: postId,
});

export const getMypageTagFeed = () => ({
  type: GET_MYPAGE_TAG_FEED,
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

export interface MypageFeedAsyncActionType {
  type: typeof GET_MYPAGE_FEED_SUCCESS | typeof GET_MYPAGE_FEED_FAILURE;
  payload: apiTypes.FeedListType[];
}

export interface MypageTagFeedAsyncActionType {
  type: typeof GET_MYPAGE_TAG_FEED_SUCCESS | typeof GET_MYPAGE_TAG_FEED_FAILURE;
  payload: apiTypes.FeedListType[];
}

export interface DeletePostAsyncActionType {
  type: typeof DELETE_POST_SUCCESS | typeof DELETE_POST_FAILURE;
  payload: any;
}

export type FeedAction =
  | ReturnType<typeof getFeed>
  | ReturnType<typeof getPostIndex>
  | FeedAsyncActionType
  | ReturnType<typeof deletePost>
  | DeletePostAsyncActionType;
export type MypageAction =
  | ReturnType<typeof getMypageFeed>
  | ReturnType<typeof getMypageTagFeed>
  | ReturnType<typeof setIsMypage>
  | MypageFeedAsyncActionType
  | MypageTagFeedAsyncActionType;

export interface FeedState {
  feed: apiTypes.FeedListType[];
  postIndex: number;
  feedRequestParams: apiTypes.FeedRequestParams;
  isMypage: boolean;
}

const initialState: FeedState = {
  feed: [
    {
      post: {
        _id: '0',
        content: 'OOTD',
        likeN: 0,
        cmtN: 0,
        pictures: [
          'https://dimg.donga.com/i/600/0/90/ugc/CDB/WEEKLY/Article/5c/a6/e3/1c/5ca6e31c198dd2738de6.jpg',
        ],
        date: 'yyyy.mm.dd',
        weather: {
          status: 1,
          temp: 0,
        },
        userId: 'q',
      },
      user: {
        userName: 'OOTD',
        profile:
          ' https://cdn.allets.com/500/2018/08/27/500_322525_1535357464.jpeg',
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
      return { ...state, feed: action.payload };
    case GET_MYPAGE_TAG_FEED:
      return { ...state };
    case GET_MYPAGE_TAG_FEED_SUCCESS:
      return { ...state, feed: action.payload };
    case SET_IS_MYPAGE:
      return { ...state, isMypage: action.payload };
    default:
      return state;
  }
}
