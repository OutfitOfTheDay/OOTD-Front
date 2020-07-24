import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { rootState } from '../data';
import { like, getLikedId } from '../data/likePost/likePost';

export default function useLikePost() {
  const likeStatus = useSelector(
    (state: rootState) => state.likePostReducer.LikeStatus,
  );
  const reRenderCount = useSelector(
    (state: rootState) => state.likePostReducer.reRenderCount,
  );
  const likedIdList = useSelector(
    (state: rootState) => state.likePostReducer.likedId,
  );
  const dispatch = useDispatch();
  const likePost = useCallback(
    (postId: string, token: string) => dispatch(like(postId, token)),
    [dispatch],
  );

  const getLikedIdList = useCallback(
    (token: string) => dispatch(getLikedId(token)),
    [dispatch],
  );

  return {
    reRenderCount,
    likeStatus,
    likedIdList,
    likePost,
    getLikedIdList,
  };
}
