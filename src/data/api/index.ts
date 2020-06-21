import axios from 'axios';
import * as apiTypes from './apiTypes';

import { GetProfileApiType } from './apiTypes';

const instanceAxios = axios.create({
  baseURL: 'http://10.156.145.162:1212',
  headers: { userId: '5edc9b14e7179a6b6367fee9' },
});

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
export const getCommentData = async (
  commentParams: string,
): Promise<apiTypes.CommentDataType> => {
  const response = await instanceAxios.get(`/post/${commentParams}`);
  return response.data;
};

export const writingComment = async (
  text: string,
  postId: string,
): Promise<number> => {
  const response = await instanceAxios.post(`/comment`, {
    postId,
    text,
  });
  return response.status;
}

export const uploadPost = async (payload: {
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
  payload.post.imgList.forEach(img => postData.append('pictures', img));
  postData.append('content', payload.post.description);
  postData.append('status', payload.post.weather.status.toString());
  postData.append('temp', payload.post.weather.temp.toString());

  const response = await instanceAxios.post('/post', postData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const getProfile = async (): Promise<GetProfileApiType> => {
  const response = await instanceAxios.get('/mypage');

  return response.data;
};

export const editProfile = async (payload: {
  userName: string;
  profile: File;
}) => {
  const postData = new FormData();
  postData.append('userName', payload.userName);
  postData.append('profile', payload.profile);

  const response = await instanceAxios.patch('/mypage', postData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data;
};

export const getMypageFeed = async (): Promise<apiTypes.FeedListType> => {
  const response = await axios.get(`${baseURL}/mypage/myfeed`, {
    headers: {
      userId: '5edc9b14e7179a6b6367fee9',
    },
  });
  return response.data;
};
