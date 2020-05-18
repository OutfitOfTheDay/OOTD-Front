import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../data/index';
import { getPost, PostState } from '../data/post';
import { useCallback } from 'react';

export default function useGetPost() {
  const dispatch = useDispatch();
  return useCallback((postData: PostState) => {
    dispatch(getPost(postData));
  }, []);
}
