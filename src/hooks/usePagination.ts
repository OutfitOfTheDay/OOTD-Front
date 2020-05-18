import { useState } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../data/index';

export default function usePagination() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [photoUrl, setPhotoUrl] = useState(
    'https://newsimg.hankookilbo.com/2019/04/29/201904291390027161_3.jpg',
  );
  const photos: string[] = useSelector(
    (state: StoreState) => state.post.postData,
  ).pictures;

  const getPhotoIndex = (Index: number): void => {
    setPhotoIndex(Index);
  };

  const getPhoto = (): void => {
    setPhotoUrl(photos[1]);
  };

  return { photoIndex, photoUrl, getPhotoIndex };
}
