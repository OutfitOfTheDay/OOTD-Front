import React from 'react';
import * as S from './style';
import UserProfileImg from '../../UserProfileImg/index';
import setWeatherIcon from 'src/utils/setWeatherIcon';

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
      <S.WritingDataeWeatherWrapper>
        <S.WritingDate>{writeDate}</S.WritingDate>
        <S.WritingWeatherWrapper>
          <S.WritingWeatherStatus src={setWeatherIcon(weather.status)} />
          <S.WritingTemp>{weather.temp}°C</S.WritingTemp>
        </S.WritingWeatherWrapper>
      </S.WritingDataeWeatherWrapper>
    </S.WriterProfileWrapper>
  );
};

export default DetailPostWriterProfile;
