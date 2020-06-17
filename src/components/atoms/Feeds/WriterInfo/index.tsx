import React from 'react';
import * as S from './style';
import { weather } from '../../../../assets/index';

interface Props {
  writerInfoData: {
    profile: string;
    userName: string;
    weather: {
      status: number;
      temp: number;
    };
    date: string;
  };
}

const WriterInfo: React.FC<Props> = ({ writerInfoData }) => {
  return (
    <S.PostInfoWrapper>
      <S.InfoUnitWrapper>
        <S.WriterImg src={writerInfoData.profile} />
        <span>{writerInfoData.userName}</span>
      </S.InfoUnitWrapper>
      <S.InfoUnitWrapper>
        <S.TempIcon src={weather.enabled.clear} />
        <span>{writerInfoData.weather.temp}°C</span>
      </S.InfoUnitWrapper>
      <span>{writerInfoData.date}</span>
    </S.PostInfoWrapper>
  );
};

export default WriterInfo;
