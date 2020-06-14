import axios from 'axios';
import * as apiTypes from './apiTypes';
const baseURL: string = 'http://192.168.43.226:1212';

export const getFeedData = async (
  feedParams: apiTypes.FeedRequestParams,
): Promise<apiTypes.FeedListType> => {
  const response = await axios.get(`${baseURL}/feed?`, {
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
  const response = await axios.get(`${baseURL}/post/${commentParams}`);
  // console.log(response.data);
  return response.data;
};

export const writingComment = async (
  text: string,
  postId: string,
): Promise<number> => {
  const response = await axios.post(
    `${baseURL}/comment`,
    { postId, text },
    {
      headers: {
        userId: '5edc9b14e7179a6b6367fee9',
      },
    },
  );
  return response.status;
};
