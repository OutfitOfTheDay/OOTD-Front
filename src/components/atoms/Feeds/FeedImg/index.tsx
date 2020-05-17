import React from 'react';
import * as S from './style';
import WriterInfo from '../WriterInfo';

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
      <WriterInfo />
    </S.FeedImageWrapper>
  );
};
FeedImg.defaultProps = defaultProps;
export default FeedImg;
