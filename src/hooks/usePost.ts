import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../data/index';
import { getPostId } from '../data/feed';

export default function usePost() {
  const feedList = useSelector((state: rootState) => state.feed.feedList);
  const postId = useSelector((state: rootState) => state.feed.postId);
  const dispatch = useDispatch();
  // const [postData, setPostData] = useState(feedList[postId]);
  const onGetPostId = useCallback(postId => dispatch(getPostId(postId)), [
    dispatch,
  ]);

  return {
    onGetPostId,
    feedList,
    postId,
  };
}
