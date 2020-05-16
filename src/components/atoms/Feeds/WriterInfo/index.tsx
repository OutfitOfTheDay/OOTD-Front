import React from 'react';
import * as S from './style';
import { weather } from '../../../../assets/index';

interface Props {}

const WriterInfo: React.FC<Props> = () => {
  const temp: number = 12;
  const date: string = '2020.04.19';
  return (
    <S.PostInfoWrapper>
      <S.InfoUnitWrapper>
        <S.WriterImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA64qFRKNjlIkAruiIckqGFw6uyjrDXqKXjiLr13xTdanO6I-X&usqp=CAU" />
        <span>김이름</span>
      </S.InfoUnitWrapper>
      <S.InfoUnitWrapper>
        <S.TempIcon src={weather.enabled.clear} />
        <span>{temp}°C</span>
      </S.InfoUnitWrapper>
      <span>{date}</span>
    </S.PostInfoWrapper>
  );
};

export default WriterInfo;
