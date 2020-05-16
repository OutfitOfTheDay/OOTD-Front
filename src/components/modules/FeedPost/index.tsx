import React from 'react';
import * as S from './style';
import {
  ImgNumberWrapper,
  FeedImg,
  WriterInfo,
  TagCommentCount,
  PostContent,
} from '../../atoms/Feeds/index';

interface Props {}

const FeedPost: React.FC<Props> = ({}) => {
  return (
    <S.FeedWrapper>
      <FeedImg ImgUrl="https://i.pinimg.com/564x/50/a2/ea/50a2eae753e75ef5679f6530129a34d2.jpg" />
      <WriterInfo />
      <ImgNumberWrapper />
      <S.Dummy>
        <TagCommentCount />
        <PostContent />
      </S.Dummy>
    </S.FeedWrapper>
  );
};

export default FeedPost;
