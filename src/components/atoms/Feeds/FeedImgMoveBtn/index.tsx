import React from 'react';
import * as S from './style';

interface Props {
  isRight?: boolean;
  ButtonImg: any;
}

const FeedImgMoveBtn: React.FC<Props> = ({ isRight, ButtonImg }) => {
  return <S.MoveButton src={ButtonImg} isRight={isRight} />;
};

export default FeedImgMoveBtn;
