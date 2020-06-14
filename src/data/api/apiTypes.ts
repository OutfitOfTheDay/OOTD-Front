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
export interface CommentDataType {
  comment: {
    userId: string;
    date: string;
    _id: string;
    postId: string;
    text: string;
  };
  user: {
    _id: string;
    userName: string;
    profile: string;
  };
}

export interface WritingCommentType {
  comment: string;
  postId: string;
}
