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
import useLikePost from 'src/hooks/useLikePost';
import useGlobal from 'src/hooks/useGlobal';
import useModal from 'src/hooks/useModal';
import { useMypage } from 'src/hooks';
import { ModalTypes } from 'src/data/modal/modal';
import MoveToUploadBlock from 'src/components/modules/MoveToUploadBlock';

const Feed: React.FC = () => {
  const { feedList, onGetFeed, onSetIsMypage } = useFeed();
  const { selectedFeedItem, selectedSortItem } = useFeedSort();
  const { weather, onSetWeatherStatus, weatherStatus } = useWeatherStatus();
  const { reRenderCount } = useLikePost();
  const { onChangeModal } = useModal();
  const { isLogin, userInfo, onSetIsLogin } = useGlobal();
  const { onGetProfile } = useMypage();

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

  const checkIsLogin = () => {
    if (localStorage.getItem('token') !== null) {
      onSetIsLogin(true);
      onGetProfile(localStorage.getItem('token'));
    } else {
      onSetIsLogin(false);
    }
  };
  useEffect(() => {
    geoLocation(onSetWeatherStatus);
    onSetIsMypage(false);
    checkIsLogin();
    // isLogin && onGetProfile(localStorage.getItem('token'));
    // console.log(isLogin);
  }, []);
  useEffect(() => {
    if (weatherStatus === 200) {
      onGetFeed(getFeedParams);
    }
  }, [selectedFeedItem, selectedSortItem, weatherStatus, reRenderCount]);

  return (
    <>
      <S.FeedContainer>
        <Header />
        <S.FeedStatusBlockWrapper>
          {isLogin ? (
            <Link to="/mypage">
              <S.UserProfileBlock>
                <UserProfileImg imgURL={userInfo.profile} size=" 3.75rem" />
                <S.UserName>{userInfo.userName} </S.UserName>
              </S.UserProfileBlock>
            </Link>
          ) : (
            <>
              <S.goLogInText>로그인이 필요한 서비스입니다</S.goLogInText>
              <S.goLogInButton
                onClick={() => {
                  onChangeModal(ModalTypes.LogIn);
                }}
              >
                로그인하기
              </S.goLogInButton>
            </>
          )}
          <WeatherStatusBlock />
          <FeedSortStatusBlock />
          {isLogin ? <MoveToUploadBlock /> : <></>}
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
