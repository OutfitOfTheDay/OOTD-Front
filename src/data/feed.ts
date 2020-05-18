const GET_FEED = 'GET_FEED' as const;

export const getFeed = () => ({
  type: GET_FEED,
});

type FeedAction = ReturnType<typeof getFeed>;

export type FeedState = {
  feedList: {
    _id: string;
    userId: string;
    profile: string;
    content: string;
    likeN: number;
    cmtN: number;
    pictures: string[];
    date: string;
    weather: {
      status: number;
      temp: number;
    };
  }[];
};

const initialState: FeedState = {
  feedList: [
    {
      _id: 'qwer',
      userId: '김이름',
      profile:
        'https://cdn.allets.com/500/2018/08/27/500_322525_1535357464.jpeg',
      content: ' string',
      likeN: 2002,
      cmtN: 1002,
      pictures: [
        'https://i.pinimg.com/564x/50/a2/ea/50a2eae753e75ef5679f6530129a34d2.jpg',
        'https://img.insight.co.kr/static/2017/10/11/700/4565ef482f2pb91l8u30.jpg',
        'https://lh3.googleusercontent.com/proxy/e7KDm2vay__zykIV2wQo0dFnboPhcQv8u3fpix8QfW0yt82VXHtbWWDKaeLIoIxh0zVAYCq5RE9Gh_r6inv7mPB5IuMvmaVKq2dTHfQzOpscdMdXYEyz5qnFfYIDvR-4GyI8uDEYBMOU40LoleoKU4Pl519SMn6j_7GOvy74nJUmNVE-XFr14R9eaqZxnAQllZzEHqqIACzLBhU_QuYnL1G95HW_wFgP-4_bZPjwZf6-26hgx_PNo4JodWKXje2m2YV_i9RirxHjgsRExCvLwkQVmC_lGFfByrfcynIix-n4acmt-6oQSsQWYHJ0MF0oymq8pEUi',
        'https://i.pinimg.com/originals/2e/5b/01/2e5b01db65071915dff659cf5f4fa3f1.png',
      ],
      date: 'string',
      weather: {
        status: 1,
        temp: 16,
      },
    },
    {
      _id: 'qwer',
      userId: '김이름',
      profile:
        'https://cdn.allets.com/500/2018/08/27/500_322525_1535357464.jpeg',
      content: ' string',
      likeN: 2002,
      cmtN: 1002,
      pictures: [
        'https://img.insight.co.kr/static/2017/10/11/700/4565ef482f2pb91l8u30.jpg',
        'https://lh3.googleusercontent.com/proxy/e7KDm2vay__zykIV2wQo0dFnboPhcQv8u3fpix8QfW0yt82VXHtbWWDKaeLIoIxh0zVAYCq5RE9Gh_r6inv7mPB5IuMvmaVKq2dTHfQzOpscdMdXYEyz5qnFfYIDvR-4GyI8uDEYBMOU40LoleoKU4Pl519SMn6j_7GOvy74nJUmNVE-XFr14R9eaqZxnAQllZzEHqqIACzLBhU_QuYnL1G95HW_wFgP-4_bZPjwZf6-26hgx_PNo4JodWKXje2m2YV_i9RirxHjgsRExCvLwkQVmC_lGFfByrfcynIix-n4acmt-6oQSsQWYHJ0MF0oymq8pEUi',
        'https://i.pinimg.com/originals/2e/5b/01/2e5b01db65071915dff659cf5f4fa3f1.png',
      ],
      date: 'string',
      weather: {
        status: 1,
        temp: 16,
      },
    },
  ],
};

export default function feed(
  state: FeedState = initialState,
  action: FeedAction,
): FeedState {
  switch (action.type) {
    case GET_FEED:
      return { ...state };
    default:
      return state;
  }
}
