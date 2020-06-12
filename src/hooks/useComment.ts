import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from '../data/index';
import { getComment, addComment } from '../data/comment/comment';

export default function useComment() {
  const commentList = useSelector(
    (state: StoreState) => state.comment.commentList,
  );
  const dispatch = useDispatch();
  const onGetComment = useCallback(
    (postId: number) => dispatch(getComment(postId)),
    [dispatch],
  );
  const onAddComment = useCallback(
    () => 
  )
  return { commentList, onGetComment };
}
