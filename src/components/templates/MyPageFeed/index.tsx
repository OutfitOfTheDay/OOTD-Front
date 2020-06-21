import React, { useEffect } from 'react';

import * as S from './style';
import FeedPost from '../../modules/FeedPost';
import useFeed from '../../../hooks/useFeed';
import useFeedSort from '../../../hooks/useFeedSort';
import Header from 'modules/Header';
import WeatherStatusBlock from 'modules/WeatherStatusBlock';
import * as apiTypes from '../../../data/api/apiTypes';
import ProfileBlock from 'src/components/modules/ProfileBlock';
import MypageCategoryBlock from 'src/components/modules/MypageCategoryBlock';
import MoveToUploadBlock from 'src/components/modules/MoveToUploadBlock';

const Feed: React.FC = () => {
  const { feedList, onGetMypageFeed, onSetIsMypage } = useFeed();

  useEffect(() => {
    onGetMypageFeed();
    onSetIsMypage(true);
  }, []);
  return (
    <>
      <S.FeedContainer>
        <Header />
        <S.MypageBlockWrapper>
          <ProfileBlock />
          <WeatherStatusBlock />
          <MypageCategoryBlock />
          <MoveToUploadBlock />
        </S.MypageBlockWrapper>
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
