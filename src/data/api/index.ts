import axios from 'axios';

import * as apiTypes from './apiTypes';
const baseURL = 'http://10.156.145.162:1212';

export const getCommentData = async (
  commentParams: number,
): Promise<apiTypes.CommentDataType> => {
  const response = await axios.get(`${baseURL}/post/${commentParams}`);
  return response.data;
};

export const writingComment = async () => {
  const response = await axios.post(`${baseURL}/comment`, {
    comment: '',
    postId: '',
  });
  return response.status;
};
