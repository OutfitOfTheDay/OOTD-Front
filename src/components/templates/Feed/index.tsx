import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
import geoLocation from '../../../utils/geoLocation';

const Feed: React.FC = () => {
  const { feedList, onGetFeed, onSetIsMypage } = useFeed();
  const { selectedFeedItem, selectedSortItem } = useFeedSort();
  const { weather, onSetWeatherStatus, weatherStatus } = useWeatherStatus();
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
    geoLocation(onSetWeatherStatus);
    onSetIsMypage(false);
  }, []);
  useEffect(() => {
    if (weatherStatus === 200) {
      onGetFeed(getFeedParams);
    }
  }, [selectedFeedItem, selectedSortItem, weatherStatus]);

  return (
    <>
      <S.FeedContainer>
        <Header />
        <S.FeedStatusBlockWrapper>
          <Link to="/mypage">
            <S.UserProfileBlock>
              <UserProfileImg imgURL="" size=" 3.75rem" />
              <S.UserName>김땡땡 </S.UserName>
            </S.UserProfileBlock>
          </Link>
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
