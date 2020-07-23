import axios from 'axios';

import * as apiTypes from './apiTypes';

const instanceAxios = axios.create({
  baseURL: 'http://192.168.43.226:1212',
});

export const logIn = async (
  loginReqParms: apiTypes.LoginReqParamsType,
): Promise<apiTypes.LoginResType> => {
  const response = await instanceAxios.post('/login', loginReqParms);
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('user', JSON.stringify(response.data.user));
  return response.data;
};

export const facebookLogIn = async () => {
  const response = await instanceAxios.get('/auth/facebook');
  return response.status;
};

export const googleLogIn = async (): Promise<apiTypes.LoginReqParamsType> => {
  const response = await instanceAxios.get('/auth/google');
  return response.data;
};

export const logOut = async () => {
  const response = await instanceAxios.get('/logout');
  return response.status;
};

export const getWeatherStatusApi = async (payload: {
  lat: number;
  lon: number;
}) => {
  const response = await instanceAxios.get('/weather', {
    params: {
      lat: payload.lat,
      lon: payload.lon,
    },
  });
  return response.data;
};

export const getFeedData = async (
  feedParams: apiTypes.FeedRequestParams,
): Promise<apiTypes.FeedListType> => {
  const response = await instanceAxios.get(`/feed?`, {
    params: {
      sortN: feedParams.sortN,
      status: feedParams.status,
      temp: feedParams.temp,
    },
  });
  return response.data;
};

export const getCommentData = async (payload: {
  token: string;
  postId: string;
}): Promise<apiTypes.CommentDataType> => {
  const response = await instanceAxios.get(`/post/${payload.postId}`, {
    headers: {
      'x-access-token': payload.token,
    },
  });
  return response.data;
};

export const writingComment = async (payload: {
  text: string;
  postId: string;
  token: string;
}): Promise<number> => {
  const response = await instanceAxios.post(
    `/comment`,
    {
      postId: payload.postId,
      text: payload.text,
    },
    {
      headers: {
        'x-access-token': payload.token,
      },
    },
  );
  return response.status;
};

export const uploadPost = async (payload: {
  token: string;
  post: {
    imgList: File[];
    description: string;
    weather: {
      status: number;
      temp: number;
    };
  };
}) => {
  const postData: FormData = new FormData();
  payload.post.imgList.forEach((img) => postData.append('pictures', img));
  postData.append('content', payload.post.description);
  postData.append('status', payload.post.weather.status.toString());
  postData.append('temp', payload.post.weather.temp.toString());

  const response = await instanceAxios.post('/post', postData, {
    headers: {
      'x-access-token': payload.token,
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const getProfile = async (payload: {
  token: string;
}): Promise<apiTypes.GetProfileApiType> => {
  const response = await instanceAxios.get('/mypage', {
    headers: { 'x-access-token': payload.token },
  });
  return response.data;
};

export const editProfile = async (payload: {
  token: string;
  userName: string;
  profile: File | string;
}) => {
  console.log(payload);
  const postData = new FormData();
  postData.append('userName', payload.userName);
  postData.append('profile', payload.profile);
  console.log(postData);
  const response = await instanceAxios.patch('/mypage', postData, {
    headers: {
      'x-access-token': payload.token,
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const getMypageFeed = async (payload: {
  token: string;
}): Promise<apiTypes.FeedListType> => {
  console.log(payload.token);
  const response = await instanceAxios.get(`/mypage/myfeed`, {
    headers: { 'x-access-token': payload.token },
  });
  return response.data;
};

export const getMypageTagFeed = async (payload: {
  token: string;
}): Promise<apiTypes.FeedListType> => {
  const response = await instanceAxios.get(`/mypage/tagfeed`, {
    headers: { 'x-access-token': payload.token },
  });
  console.log(response.data);

  return response.data;
};

export const likePost = async (payload: {
  token: string;
  postId: string;
}): Promise<number> => {
  const response = await instanceAxios.get(`/like/${payload.postId}`, {
    headers: { 'x-access-token': payload.token },
  });
  return response.status;
};

export const deletePost = async (payload: {
  token: string;
  postId: string;
}): Promise<number> => {
  const response = await instanceAxios.delete(`/post/${payload.postId}`, {
    headers: { 'x-access-token': payload.token },
  });
  return response.status;
};
