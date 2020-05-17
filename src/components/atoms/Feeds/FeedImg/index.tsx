import React from 'react';
import * as S from './style';
import WriterInfo from '../WriterInfo';
import FeedImgMoveBtn from '../FeedImgMoveBtn';
import leftMoveButton from '../../../../assets/Feed_icon/left_move_button.png';
import rightMoveButton from '../../../../assets/Feed_icon/right_move_button.png';

interface Props {
  ImgUrl: string;
}

const defaultProps: Props = {
  ImgUrl: 'https://blog.jinbo.net/attach/615/200937431.jpg',
};
const FeedImg: React.FC<Props> = ({ ImgUrl }) => {
  return (
    <S.FeedImageWrapper>
      <S.FeedImage src={ImgUrl} />
      <FeedImgMoveBtn ButtonImg={leftMoveButton} />
      <FeedImgMoveBtn isRight ButtonImg={rightMoveButton} />
      <WriterInfo />
    </S.FeedImageWrapper>
  );
};
FeedImg.defaultProps = defaultProps;
export default FeedImg;
