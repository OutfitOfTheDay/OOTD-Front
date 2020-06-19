import axios from 'axios';
import * as apiTypes from './apiTypes';
const baseURL: string = 'http://10.156.145.162:1212';

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
  const response = await instanceAxios.get(`${baseURL}/feed?`, {
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
  const response = await instanceAxios.get(`${baseURL}/post/${commentParams}`);
  return response.data;
};

export const writingComment = async (
  text: string,
  postId: string,
): Promise<number> => {
  const response = await instanceAxios.post(`${baseURL}/comment`, {
    postId,
    text,
  });
  return response.status;
};
