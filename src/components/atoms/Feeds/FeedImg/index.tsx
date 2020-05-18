import React from 'react';
import * as S from './style';
import WriterInfo from '../WriterInfo';
import FeedImgMoveBtn from '../FeedImgMoveBtn';
import leftMoveButton from '../../../../assets/Feed_icon/left_move_button.png';
import rightMoveButton from '../../../../assets/Feed_icon/right_move_button.png';
import usePagination from '../../../../hooks/usePagination';

const FeedImg: React.FC = () => {
  const { photoUrl } = usePagination();
  return (
    <S.FeedImageWrapper>
      <S.FeedImage src={photoUrl} />
      <FeedImgMoveBtn ButtonImg={leftMoveButton} />
      <FeedImgMoveBtn isRight ButtonImg={rightMoveButton} />
      <WriterInfo />
    </S.FeedImageWrapper>
  );
};
export default FeedImg;
