import React, { useEffect } from 'react';
import * as S from './style';
import FeedPost from '../../modules/FeedPost';
import useFeed from '../../../hooks/useFeed';
import { getFeedData } from '../../../data/api/getFeedData';

const Feed: React.FC = () => {
  const { feedList } = useFeed();
  useEffect(() => {
    getFeedData().then((response) => {
      // onGetFeed(response[0]);
      console.log(response);
    });
  }, []);
  return (
    <S.FeedContainer>
      {feedList.map((feedPost, index) => (
        <FeedPost post={feedPost} key={index} postId={index} />
      ))}
    </S.FeedContainer>
  );
};

export default Feed;
