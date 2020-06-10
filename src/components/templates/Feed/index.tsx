import React, { useEffect } from 'react';
import * as S from './style';
import FeedPost from '../../modules/FeedPost';
import useFeed from '../../../hooks/useFeed';
import Header from 'modules/Header';
import { getFeedData } from '../../../data/api/getFeedData';

const Feed: React.FC = () => {
  const { feedList } = useFeed();

  return (
    <S.FeedContainer>
      <Header />
      {feedList.map((feedPost, index) => (
        <FeedPost post={feedPost} key={index} postId={index} />
      ))}
    </S.FeedContainer>
  );
};

export default Feed;
