import React from 'react';
import * as S from './style';

interface Props {
  isRight?: boolean;
  ButtonImg: any;
  moveIndex: () => void;
}

const FeedImgMoveBtn: React.FC<Props> = ({ isRight, ButtonImg, moveIndex }) => {
  return <S.MoveButton src={ButtonImg} isRight={isRight} onClick={moveIndex} />;
};

export default FeedImgMoveBtn;
