import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../data/index';
import { getPostId } from '../data/feed/feed';

export default function usePost() {
  const feedList = useSelector((state: StoreState) => state.feed.feed);
  const postId = useSelector((state: StoreState) => state.feed.postId);
  const dispatch = useDispatch();
  const onGetPostId = useCallback((postId) => dispatch(getPostId(postId)), [
    dispatch,
  ]);

  return {
    onGetPostId,
    feedList,
    postId,
  };
}
