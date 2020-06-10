import React, { useEffect } from 'react';
import * as S from './style';
import WriterInfo from '../WriterInfo';
import FeedImgMoveBtn from '../FeedImgMoveBtn';
import ImgNumberWrapper from '../ImgNumberWrapper/index';
import useDetailPost from '../../../../hooks/useDetailPost';
import { feed } from '../../../../assets/index';

interface Props {
  photoIndex: number;
  postPhotos: string[];
  writerInfoData: {
    profile: string;
    userName: string;
    weather: {
      status: number;
      temp: number;
    };
    date: string;
  };
  getNextIndex: () => void;
  getPrevIndex: () => void;
  isDetail?: boolean;
}

const FeedImg: React.FC<Props> = ({
  postPhotos,
  writerInfoData,
  photoIndex,
  getNextIndex,
  getPrevIndex,
  isDetail,
}) => {
  const { DetailNumberOfPhoto, onGetDetailPhotoIndex } = useDetailPost();
  const URL = postPhotos[photoIndex];
  return (
    <S.FeedImageWrapper>
      <S.FeedImage src={URL} />
      <FeedImgMoveBtn
        ButtonImg={feed.left_move_button}
        moveIndex={getPrevIndex}
      />
      <FeedImgMoveBtn
        isRight
        ButtonImg={feed.right_move_button}
        moveIndex={getNextIndex}
      />
      {isDetail ? (
        <ImgNumberWrapper
          numberOfPhoto={DetailNumberOfPhoto}
          getPhotoIndex={onGetDetailPhotoIndex}
          selectedPhotoIndex={photoIndex}
        />
      ) : (
        <WriterInfo writerInfoData={writerInfoData} />
      )}
    </S.FeedImageWrapper>
  );
};
export default FeedImg;
