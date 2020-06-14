import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../data/index';
import { getPostIndex } from '../data/feed/feed';

export default function usePost() {
  const feedList = useSelector((state: StoreState) => state.feed.feed);
  const postIndex = useSelector((state: StoreState) => state.feed.postIndex);
  const dispatch = useDispatch();
  const onGetPostIndex = useCallback(
    (postIndex) => dispatch(getPostIndex(postIndex)),
    [dispatch],
  );

  return {
    onGetPostIndex,
    feedList,
    postIndex,
  };
}
