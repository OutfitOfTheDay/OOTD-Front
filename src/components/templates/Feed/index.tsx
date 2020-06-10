import React from 'react';
import * as S from './style';
import FeedPost from '../../modules/FeedPost';
import useFeed from '../../../hooks/useFeed';

const Feed: React.FC = () => {
  const feeds = useFeed();
  return (
    <S.FeedContainer>
      {feeds.map((feedPost, index) => (
        <FeedPost post={feedPost} key={index} postId={index} />
      ))}
    </S.FeedContainer>
  );
};

export default Feed;
