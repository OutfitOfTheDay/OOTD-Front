import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { rootState } from '../data';
import { like } from '../data/likePost/likePost';

export default function useLikePost() {
  const likeStatus = useSelector(
    (state: rootState) => state.likePostReducer.LikeStatus,
  );
  const reRenderCount = useSelector(
    (state: rootState) => state.likePostReducer.reRenderCount,
  );
  const dispatch = useDispatch();
  const likePost = useCallback((postId: string) => dispatch(like(postId)), [
    dispatch,
  ]);

  return {
    reRenderCount,
    likeStatus,
    likePost,
  };
}
