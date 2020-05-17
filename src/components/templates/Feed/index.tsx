import React from 'react';
import * as S from './style';
import FeedPost from '../../modules/FeedPost';

const index = () => {
  return (
    <S.FeedContainer>
      <FeedPost />
      <FeedPost />
    </S.FeedContainer>
  );
};

export default index;
