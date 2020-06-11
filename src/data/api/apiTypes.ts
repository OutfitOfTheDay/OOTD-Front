export interface FeedRequestParams {
  sortN: number;
  status: number;
  temp: number;
}

export interface FeedListType {
  post: {
    _id: string;
    content: string;
    likeN: number;
    cmtN: number;
    pictures: string[];
    date: string;
    weather: {
      status: number;
      temp: number;
    };
    userId: string;
  };
  user: {
    userName: string;
    profile: string;
  };
}
