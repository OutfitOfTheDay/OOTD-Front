import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../data/index';
import { getPost, PostState } from '../data/post';
import { useCallback } from 'react';

export default function useGetPost() {
  const dispatch = useDispatch();
  return useCallback(
    (postData: {
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
    }) => {
      dispatch(getPost(postData));
    },
    [],
  );
}
