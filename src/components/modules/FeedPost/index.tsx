import React, { useEffect } from 'react';
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
  return (
    <S.PostWrapper>
      <FeedImg />
      <ImgNumberWrapper />
      <S.PostContentWrapper>
        <PostLikeButton />
        <TagCommentCount />
        <PostContent />
      </S.PostContentWrapper>
    </S.PostWrapper>
  );
};

export default FeedPost;
