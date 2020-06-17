import React, { useEffect } from 'react';

import * as S from './style';
import FeedPost from '../../modules/FeedPost';
import useFeed from '../../../hooks/useFeed';
import useFeedSort from '../../../hooks/useFeedSort';
import Header from 'modules/Header';
import FeedSortStatusBlock from 'modules/FeedSortStatusBlock';
import WeatherStatusBlock from 'modules/WeatherStatusBlock';
import * as apiTypes from '../../../data/api/apiTypes';

const Feed: React.FC = () => {
  const { feedList, onGetFeed } = useFeed();
  const { selectedFeedItem, selectedSortItem } = useFeedSort();
  const getSortN = (
    selectedFeedItem: string,
    selectedSortItem: string,
  ): number => {
    if (selectedFeedItem === 'OOTD' && selectedSortItem === 'POPULAR') {
      return 1;
    } else if (selectedFeedItem === 'OOTD' && selectedSortItem === 'NEW') {
      return 2;
    } else if (selectedFeedItem === 'STYLE' && selectedSortItem === 'POPULAR') {
      return 3;
    } else if (selectedFeedItem === 'STYLE' && selectedSortItem === 'NEW') {
      return 4;
    }
  };

  const getFeedParams: apiTypes.FeedRequestParams = {
    sortN: getSortN(selectedFeedItem, selectedSortItem),
    status: 2,
    temp: 29.7,
  };
  useEffect(() => {
    onGetFeed(getFeedParams);
  }, [selectedFeedItem, selectedSortItem]);
  return (
    <>
      <S.FeedContainer>
        <Header />
        <S.FeedStatusBlockWrapper>
          <WeatherStatusBlock />
          <FeedSortStatusBlock />
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
