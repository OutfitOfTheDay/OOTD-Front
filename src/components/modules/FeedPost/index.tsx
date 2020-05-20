import React, { useState } from 'react';
import * as S from './style';
import {
  ImgNumberWrapper,
  FeedImg,
  TagCommentCount,
  PostContent,
  PostLikeButton,
} from '../../atoms/Feeds/index';
import useGetPost from '../../../hooks/useGetPost';

interface Props {
  post: {
    _id: string;
    userId: string;
    profile: string;
    content: string;
    likeN: number;
    cmtN: number;
    pictures: string[];
    date: string;
    weather: {
      status: number;
      temp: number;
    };
  };
}

const FeedPost: React.FC<Props> = ({ post }) => {
  const getPost = useGetPost();
  getPost(post);
  const writerInfoData = {
    profile: post.profile,
    userName: post.userId,
    weather: post.weather,
    date: post.date,
  };
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const numberOfPhoto = post.pictures.length;
  const getPhotoIndex = (index: number): void => {
    setPhotoIndex(index);
  };
  const getNextIndex = (): void => {
    if (photoIndex !== numberOfPhoto - 1) {
      setPhotoIndex(photoIndex + 1);
    } else setPhotoIndex(0);
  };
  const getPrevIndex = (): void => {
    if (photoIndex !== 0) {
      setPhotoIndex(photoIndex - 1);
    } else setPhotoIndex(numberOfPhoto - 1);
  };
  return (
    <S.PostWrapper>
      <FeedImg
        postPhotos={post.pictures}
        writerInfoData={writerInfoData}
        photoIndex={photoIndex}
        getNextIndex={getNextIndex}
        getPrevIndex={getPrevIndex}
      />
      <ImgNumberWrapper
        numberOfPhoto={numberOfPhoto}
        getPhotoIndex={getPhotoIndex}
        selectedPhotoIndex={photoIndex}
      />
      <S.PostContentWrapper>
        <PostLikeButton />
        <TagCommentCount commentCount={post.cmtN} likeCount={post.likeN} />
        <PostContent content={post.content} />
      </S.PostContentWrapper>
    </S.PostWrapper>
  );
};

export default FeedPost;
