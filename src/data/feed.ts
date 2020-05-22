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
      userId: '김a름',
      profile:
        'https://cdn.allets.com/500/2018/08/27/500_322525_1535357464.jpeg',
      content: ' string',
      likeN: 202,
      cmtN: 102,
      pictures: [
        'https://i.pinimg.com/564x/50/a2/ea/50a2eae753e75ef5679f6530129a34d2.jpg',
        'https://img9.yna.co.kr/etc/inner/KR/2019/04/08/AKR20190408066300073_01_i_P2.jpg',
        'https://img.insight.co.kr/static/2017/10/11/700/4565ef482f2pb91l8u30.jpg',
        'https://i.pinimg.com/originals/2e/5b/01/2e5b01db65071915dff659cf5f4fa3f1.png',
      ],
      date: 'string',
      weather: {
        status: 1,
        temp: 16,
      },
    },
    {
      _id: 's',
      userId: '김b름',
      profile:
        'https://cdn.allets.com/500/2018/08/27/500_322525_1535357464.jpeg',
      content: ' string',
      likeN: 2,
      cmtN: 1002,
      pictures: [
        'https://i.pinimg.com/originals/2e/5b/01/2e5b01db65071915dff659cf5f4fa3f1.png',
        'https://img.insight.co.kr/static/2017/10/11/700/4565ef482f2pb91l8u30.jpg',
        'https://dimg.donga.com/i/600/0/90/ugc/CDB/WEEKLY/Article/5c/a6/e3/1c/5ca6e31c198dd2738de6.jpg',
      ],
      date: 'string',
      weather: {
        status: 1,
        temp: 16,
      },
    },
    {
      _id: 'qwer',
      userId: '김c름',
      profile:
        'https://cdn.allets.com/500/2018/08/27/500_322525_1535357464.jpeg',
      content: ' string',
      likeN: 2002,
      cmtN: 1002,
      pictures: [
        'https://dimg.donga.com/i/600/0/90/ugc/CDB/WEEKLY/Article/5c/a6/e3/1c/5ca6e31c198dd2738de6.jpg',
        'https://i.pinimg.com/originals/2e/5b/01/2e5b01db65071915dff659cf5f4fa3f1.png',
        'https://img.insight.co.kr/static/2017/10/11/700/4565ef482f2pb91l8u30.jpg',
        'https://img.insight.co.kr/static/2017/10/11/700/4565ef482f2pb91l8u30.jpg',
        'https://img.insight.co.kr/static/2017/10/11/700/4565ef482f2pb91l8u30.jpg',
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
  state = initialState,
  action: FeedAction,
): FeedState {
  switch (action.type) {
    case GET_FEED:
      return { ...state };
    default:
      return state;
  }
}
