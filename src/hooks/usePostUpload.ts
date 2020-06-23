import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { rootState } from '../data/index';
import {
  addImg,
  changeDescription,
  deleteImg,
  uploadPost,
} from '../data/modules/PostUpload';

export default function usePostUpload() {
  const imgList = useSelector(
    (state: rootState) => state.postUploadReducer.imgList,
  );
  const description = useSelector(
    (state: rootState) => state.postUploadReducer.description,
  );
  const dispatch = useDispatch();

  const onAddImg = useCallback((newImg: File) => dispatch(addImg(newImg)), [
    dispatch,
  ]);
  const onDeleteImg = useCallback(
    (index: number) => dispatch(deleteImg(index)),
    [dispatch],
  );
  const onChangeDescription = useCallback(
    (description: string) => dispatch(changeDescription(description)),
    [dispatch],
  );
  const onUploadPost = useCallback(
    (post: {
      imgList: File[];
      description: string;
      weather: {
        status: number;
        temp: number;
      };
    }) => dispatch(uploadPost(post)),
    [dispatch],
  );

  return {
    description,
    imgList,
    onAddImg,
    onChangeDescription,
    onDeleteImg,
    onUploadPost,
  };
}
