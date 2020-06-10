import React from 'react';
import * as S from './style';
import UserProfileImg from '../../UserProfileImg/index';

interface Props {
  profilePhoto: string;
  name: string;
  writeDate: string;
  weather: {
    status: number;
    temp: number;
  };
}

const DetailPostWriterProfile: React.FC<Props> = ({
  profilePhoto,
  name,
  writeDate,
  weather,
}) => {
  return (
    <S.WriterProfileWrapper>
      <S.WriterInfoWrapper>
        <UserProfileImg imgURL={profilePhoto} size="1.875rem" />
        <S.WriterName>{name}</S.WriterName>
      </S.WriterInfoWrapper>
      <S.WritingDate>{writeDate}</S.WritingDate>
      <S.WritingWeatherWrapper>
        <S.WritingWeatherStatus />
        <S.WritingTemp>{weather.temp}°C</S.WritingTemp>
      </S.WritingWeatherWrapper>
    </S.WriterProfileWrapper>
  );
};

export default DetailPostWriterProfile;
