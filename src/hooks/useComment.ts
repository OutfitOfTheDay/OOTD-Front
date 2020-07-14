import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from '../data/index';
import { getComment, addComment } from '../data/comment/comment';

export default function useComment() {
  const commentList = useSelector(
    (state: StoreState) => state.comment.commentList,
  );

  const reRenderCount = useSelector(
    (state: StoreState) => state.comment.reRenderCount,
  );

  const writingComment = useSelector(
    (state: StoreState) => state.comment.writingComment,
  );
  const dispatch = useDispatch();
  const onGetComment = useCallback(
    (postId: string, token: string) => dispatch(getComment(postId, token)),
    [dispatch],
  );
  const onAddComment = useCallback(
    (comment: string, postId: string, token) =>
      dispatch(addComment(comment, postId, token)),
    [dispatch],
  );
  return {
    commentList,
    writingComment,
    onGetComment,
    onAddComment,
    reRenderCount,
  };
}
