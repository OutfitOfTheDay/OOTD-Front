import React, { useEffect } from 'react';

import * as S from './style';
import * as apiTypes from 'src/data/api/apiTypes';
import FeedPost from '../../modules/FeedPost';
import useFeed from '../../../hooks/useFeed';
import useFeedSort from '../../../hooks/useFeedSort';
import useWeatherStatus from 'src/hooks/useWeatherStatus';
import Header from 'modules/Header';
import FeedSortStatusBlock from 'modules/FeedSortStatusBlock';
import WeatherStatusBlock from 'modules/WeatherStatusBlock';
import UserProfileImg from 'atoms/UserProfileImg';

const Feed: React.FC = () => {
  const { feedList, onGetFeed } = useFeed();
  const { selectedFeedItem, selectedSortItem } = useFeedSort();
  const { weather } = useWeatherStatus();
  const getSortN = (
    selectedFeedItem: 'OOTD' | 'STYLE',
    selectedSortItem: 'POPULAR' | 'NEW',
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
    status: weather.status,
    temp: weather.temp,
  };
  useEffect(() => {
    onGetFeed(getFeedParams);
  }, [selectedFeedItem, selectedSortItem]);
  return (
    <>
      <S.FeedContainer>
        <Header />
        <S.FeedStatusBlockWrapper>
          <S.UserProfileBlock>
            <UserProfileImg imgURL="" size=" 3.75rem" />
            <S.UserName>김땡땡 </S.UserName>
          </S.UserProfileBlock>
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
