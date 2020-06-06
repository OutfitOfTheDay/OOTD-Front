import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from 'src/data';
import { useCallback } from 'react';
import { increaseIndex, decreaseIndex } from 'src/data/detailPost';

export default function useDetailPost() {
  const postId = useSelector((state: StoreState) => state.detailPost.postId);
  const photoIndex = useSelector(
    (state: StoreState) => state.detailPost.photoIndex,
  );
  const dispatch = useDispatch();
  const onIncreaseIndex = useCallback(() => dispatch(increaseIndex()), [
    dispatch,
  ]);
  const onDecreaseIndex = useCallback(() => dispatch(decreaseIndex()), [
    dispatch,
  ]);

  return { postId, photoIndex, onDecreaseIndex, onIncreaseIndex };
}
