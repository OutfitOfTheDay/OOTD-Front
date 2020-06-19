import * as apiTypes from '../api/apiTypes';

export const GET_FEED = 'GET_FEED' as const;
export const GET_FEED_SUCCESS = 'GET_FEED_SUCCESS';
export const GET_FEED_FAILURE = 'GET_FEED_FAILURE';
export const GET_MYPAGE_FEED = 'GET_MYPAGE_FEED' as const;
export const GET_MYPAGE_FEED_SUCCESS = 'GET_MYPAGE_FEED_SUCCESS';
export const GET_MYPAGE_FEED_FAILURE = 'GET_MYPAGE_FEED_FAILURE';
export const GET_POST_INDEX = 'GET_POST_INDEX' as const;
export const SET_IS_MYPAGE = 'SET_IS_MYPAGE' as const;

export const getFeed = (feedRequestParams: apiTypes.FeedRequestParams) => ({
  type: GET_FEED,
  payload: feedRequestParams,
});

export const getMypageFeed = () => ({
  type: GET_MYPAGE_FEED,
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
export type FeedAction =
  | ReturnType<typeof getFeed>
  | ReturnType<typeof getPostIndex>
  | FeedAsyncActionType;

export type MypageAction =
  | ReturnType<typeof getMypageFeed>
  | ReturnType<typeof setIsMypage>
  | MypageFeedAsyncActionType;

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
        content:
          '인간에게는 누구나 자신만의 산수가 있다.\n 그리고 언젠가는 그걸 발견하기 마련이다\n 세상엔 수학정도가 필요한 인생도 있겠지만 \n 대부분 산수에서 끝장이다 \n 어느새 삶은 저물기 마련이다',
        likeN: 1,
        cmtN: 1,
        pictures: [
          'https://dimg.donga.com/i/600/0/90/ugc/CDB/WEEKLY/Article/5c/a6/e3/1c/5ca6e31c198dd2738de6.jpg',
          'https://i.pinimg.com/originals/2e/5b/01/2e5b01db65071915dff659cf5f4fa3f1.png',
          'https://img.insight.co.kr/static/2017/10/11/700/4565ef482f2pb91l8u30.jpg',
        ],
        date: 'yyyy.mm.dd',
        weather: {
          status: 1,
          temp: 16,
        },
        userId: 'q',
      },
      user: {
        userName: '가나다',
        profile:
          ' https://cdn.allets.com/500/2018/08/27/500_322525_1535357464.jpeg',
      },
    },
  ],
  postIndex: 0,
  feedRequestParams: {
    sortN: 1,
    status: 1,
    temp: 25,
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
    case SET_IS_MYPAGE:
      return { ...state, isMypage: action.payload };
    default:
      return state;
  }
}
