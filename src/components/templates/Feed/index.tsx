import React, { useEffect } from 'react';

import * as S from './style';
import FeedPost from '../../modules/FeedPost';
import useFeed from '../../../hooks/useFeed';
import Header from 'modules/Header';
import FeedSortStatusBlock from 'modules/FeedSortStatusBlock';
import WeatherStatusBlock from 'modules/WeatherStatusBlock';
import * as apiTypes from '../../../data/api/apiTypes';

const Feed: React.FC = () => {
  const { feedList, onGetFeed } = useFeed();
  const dummyParams: apiTypes.FeedRequestParams = {
    sortN: 1,
    status: 2,
    temp: 29.7,
  };
  useEffect(() => {
    onGetFeed(dummyParams);
  }, []);
  return (
    <>
      <S.FeedContainer>
        <Header />
        <S.FeedStatusBlockWrapper>
          <FeedSortStatusBlock />
          <WeatherStatusBlock />
        </S.FeedStatusBlockWrapper>
        {feedList.length !== 0 ? (
          <>
            {feedList.map((feedPost, index) => (
              <FeedPost post={feedPost} key={index} postId={index} />
            ))}
          </>
        ) : (
          <div>피드가 없어요</div>
        )}
      </S.FeedContainer>
    </>
  );
};

export default Feed;
