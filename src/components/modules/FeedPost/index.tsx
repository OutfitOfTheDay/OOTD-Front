import React, { useState } from 'react';

import * as S from './style';
import * as apiTypes from '../../../data/api/apiTypes';
import useFeed from 'src/hooks/useFeed';
import {
  ImgNumberWrapper,
  FeedImg,
  TagCommentCount,
  PostContent,
  PostLikeButton,
  PostModifyButton,
} from '../../atoms/Feeds';

interface Props {
  post: apiTypes.FeedListType;
  postId: number;
}

const FeedPost: React.FC<Props> = ({ post, postId }) => {
  const writerInfoData = {
    profile: post.user.profile,
    userName: post.user.userName,
    weather: post.post.weather,
    date: post.post.date,
  };
  const { isMypage } = useFeed();
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const numberOfPhoto = post.post.pictures.length;
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
        postPhotos={post.post.pictures}
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
        <S.IsMypageWrapper>
          <PostLikeButton width="1.563rem" height="2.125rem" />
          <PostModifyButton fontSize={1} />
        </S.IsMypageWrapper>
        <TagCommentCount
          commentCount={post.post.cmtN}
          likeCount={post.post.likeN}
        />
        <PostContent content={post.post.content} postIndex={postId} />
      </S.PostContentWrapper>
    </S.PostWrapper>
  );
};

export default FeedPost;
