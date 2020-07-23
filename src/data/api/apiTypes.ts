export interface LoginReqParamsType {
  userId: string;
  userName: string;
  accessToken: string;
}

export interface LoginResType {
  message: string;
  token: string;
  user: LoginUserInfoType;
}

export interface LoginUserInfoType {
  id: string;
  profile: string;
  userName: string;
}

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
    likedId: string[];
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
export interface WeatherStatusApiType {
  weather: {
    status: number;
    temp: number;
  };
}

export interface GetProfileApiType {
  userName: string;
  profile: File | string;
}

export interface loginOauthResposeType {
  // res: {
  El: string;
  Zi: {
    token_type: string;
    access_token: string;
    scope: string;
    login_hint: string;
    expires_in: number;
    id_token: string;
    session_state: {
      extraQueryParams: {
        authuser: string;
      };
    };
    first_issued_at: number;
    expires_at: number;
    idpId: string;
  };
  w3: {
    Eea: string;
    ig: string;
    ofa: string;
    wea: string;
    Paa: string;
    U3: string;
  };
  googleId: string;
  tokenObj: {
    token_type: string;
    access_token: string;
    scope: string;
    login_hint: string;
    expires_in: number;
    id_token: string;
    session_state: {
      extraQueryParams: {
        authuser: string;
      };
    };
    first_issued_at: number;
    expires_at: number;
    idpId: string;
  };
  tokenId: string;
  accessToken: string;
  profileObj: {
    googleId: string;
    imageUrl: string;
    email: string;
    name: string;
    givenName: string;
    familyName: string;
  };
}
// }
