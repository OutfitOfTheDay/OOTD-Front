import * as React from 'react';

import {
  DescriptionInput,
  ImageContainer,
  StyleUploadWrapper,
  SubTitle,
  UploadBtn,
  WeatherHeaderWrapper,
  WeatherSelectContainer,
} from 'atoms/StyleUpload';
import { weather as weatherIcon } from 'assets/index';

import usePostUpload from '../../../hooks/usePostUpload';
import useWeatherStatus from '../../../hooks/useWeatherStatus';
import gps from '../../../utils/geoLocation';

const StyleUpload: React.FC = () => {
  const {
    imgList,
    description,
    onAddImg,
    onDeleteImg,
    onChangeDescription,
    onUploadPost,
  } = usePostUpload();
  const {
    onChangeWeatherStatus,
    onSetWeatherStatus,
    weather,
  } = useWeatherStatus();

  return (
    <StyleUploadWrapper>
      <SubTitle>IMAGE</SubTitle>
      <ImageContainer
        imgList={imgList}
        onAddImg={onAddImg}
        onDeleteImg={onDeleteImg}
      />
      <SubTitle>DESCRIPTION</SubTitle>
      <DescriptionInput
        placeholder="내용을 입력해주세요."
        onChange={e => onChangeDescription(e.target.value)}
        value={description}
      />
      <WeatherHeaderWrapper>
        <SubTitle className="weather">WEATHER</SubTitle>
        <img
          src={weatherIcon.reset}
          alt="GPS reset"
          onClick={() => gps(onSetWeatherStatus)}
        />
        <span>현재기온으로</span>
        <span>#현재기온이 기본설정되어 있습니다.</span>
      </WeatherHeaderWrapper>
      <WeatherSelectContainer
        weather={weather}
        onChangeWeatherStatus={onChangeWeatherStatus}
      />
      <UploadBtn
        isAllFilled={!!(imgList.length > 0 && description)}
        onClick={() => onUploadPost({ imgList, description, weather })}
      >
        업로드
      </UploadBtn>
    </StyleUploadWrapper>
  );
};

export default StyleUpload;
