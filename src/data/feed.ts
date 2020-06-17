const GET_FEED = 'GET_FEED' as const;
const GET_POSTID = 'GET_POSTID' as const;

export const getFeed = (feedData: any) => ({
  type: GET_FEED,
  payload: feedData,
});

export const getPostId = (postId: number) => ({
  type: GET_POSTID,
  payload: postId,
});

type FeedAction = ReturnType<typeof getFeed> | ReturnType<typeof getPostId>;

export interface FeedState {
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
  postId: number;
}

const initialState: FeedState = {
  feedList: [
    {
      _id: 'qwer',
      userId: '김a름',
      profile:
        'https://cdn.allets.com/500/2018/08/27/500_322525_1535357464.jpeg',
      content:
        ' 미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인 영웅이된나루토보면 진짜내가다 감격스럽고 나루토 노래부터 명장면까지 가슴울리는장면들이 뇌리에 스치면서 가슴이 웅장해진다.. 그리고 극장판 에 카카시앞에 운석날라오는 거대한 걸 사스케가 갑자기 순식간에 나타나서 부숴버리곤 개간지나게 나루토가 없다면 마을을 지킬 자는 나밖에 없다 라며 바람처럼 사라진장면은 진짜 나루토처음부터 본사람이면 안울수가없더라 진짜 너무 감격스럽고 보루토를 최근에 알았는데 미안하다.. 지금20화보는데 진짜 나루토세대나와서 너무 감격스럽고 모두어엿하게 큰거보니 내가 다 뭔가 알수없는 추억이라해야되나 그런감정이 이상하게 얽혀있다.. 시노는 말이많아진거같다 좋은선생이고..그리고 보루토왜욕하냐 귀여운데 나루토를보는것같다 성격도 닮았어 그리고버루토에 나루토사스케 둘이싸워도 이기는 신같은존재 나온다는게 사실임?? 그리고인터닛에 쳐봣는디 이거 ㄹㅇㄹㅇ 진짜팩트냐?? 저적이 보루토에 나오는 신급괴물임?ㅡ 나루토사스케 합체한거봐라 진짜 ㅆㅂ 이거보고 개충격먹어가지고 와 소리 저절로 나오더라 ;; 진짜 저건 개오지는데.. 저게 ㄹㅇ이면 진짜 꼭봐야돼 진짜 세계도 파괴시키는거아니야 .. 와 진짜 나루토사스케가 저렇게 되다니 진짜 눈물나려고했다.. 버루토그라서 계속보는중인데 저거 ㄹㅇ이냐..? 하.. ㅆㅂ 사스케 보고싶다..  진짜언제 이렇게 신급 최강들이 되었을까 옛날생각나고 나 중딩때생각나고 뭔가 슬프기도하고 좋기도하고 감격도하고 여러가지감정이 복잡하네.. 아무튼 나루토는 진짜 애니중최거명작임..',
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
      content:
        ' 별이 걱정도 부끄러운 버리었습니다. 어머님, 차 책상을 잔디가 별에도 까닭입니다. 나는 부끄러운 어머니 봅니다. 비둘기, 이름을 사랑과 겨울이 하나 이네들은 때 그리워 한 있습니다. 둘 그리워 마디씩 계십니다. 별들을 속의 헤일 어머니 별 지나고 그리고 듯합니다',
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
      content:
        '인간에게는 누구나 자신만의 산수가 있다.\n 그리고 언젠가는 그걸 발견하기 마련이다\n 세상엔 수학정도가 필요한 인생도 있겠지만 \n 대부분 산수에서 끝장이다 \n 어느새 삶은 저물기 마련이다',
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
  postId: 1,
};

export default function feed(
  state = initialState,
  action: FeedAction,
): FeedState {
  switch (action.type) {
    case GET_FEED:
      return { ...state, feedList: action.payload };
    case GET_POSTID:
      return { ...state, postId: action.payload };
    default:
      return state;
  }
}
