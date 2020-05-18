import { useState } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../data/index';

export default function usePagination() {
  const photos: string[] = useSelector(
    (state: StoreState) => state.post.postData,
  ).pictures;
  const [photoIndex, setPhotoIndex] = useState(0);
  const [photoUrl, setPhotoUrl] = useState(photos[photoIndex]);
  const [numberOfPhoto, setnumberOfPhoto] = useState(photos.length);
  const getPhotoIndex = (Index: number): void => {
    setPhotoIndex(Index);
  };

  const getPhoto = (): void => {
    setPhotoUrl(photos[photoIndex]);
  };
  return { numberOfPhoto, photoIndex, photoUrl, getPhotoIndex };
}
