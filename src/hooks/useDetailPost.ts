import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from 'src/data';
import { useCallback } from 'react';
import {
  increaseIndex,
  decreaseIndex,
  getNumberOfPhoto,
} from 'src/data/detailPost';
import { getPostIndex } from 'src/data/feed/feed';

export default function useDetailPost() {
  const DetailPostId = useSelector(
    (state: StoreState) => state.detailPost.postId,
  );
  const DetailPhotoIndex = useSelector(
    (state: StoreState) => state.detailPost.photoIndex,
  );

  const DetailNumberOfPhoto = useSelector(
    (state: StoreState) => state.detailPost.numberOfPhoto,
  );
  const dispatch = useDispatch();

  const onGetPostId = useCallback((postId) => dispatch(getPostIndex(postId)), [
    dispatch,
  ]);

  const onGetDetailPhotoIndex = useCallback(
    (photoIndex) => dispatch(getPostIndex(photoIndex)),
    [dispatch],
  );

  const onGetNumberOfPhoto = useCallback(
    (numberOfPhoto) => dispatch(getNumberOfPhoto(numberOfPhoto)),
    [],
  );

  const onIncreaseIndex = useCallback(() => dispatch(increaseIndex()), [
    dispatch,
  ]);
  const onDecreaseIndex = useCallback(() => dispatch(decreaseIndex()), [
    dispatch,
  ]);

  return {
    DetailPostId,
    DetailPhotoIndex,
    DetailNumberOfPhoto,
    onGetPostId,
    onGetNumberOfPhoto,
    onGetDetailPhotoIndex,
    onDecreaseIndex,
    onIncreaseIndex,
  };
}
