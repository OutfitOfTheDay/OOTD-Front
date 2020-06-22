import * as React from 'react';

import {
  BlockTitle,
  BlockWrapper,
  TemperatureStatus,
  TitleWrapper,
  WeatherStatus,
} from 'atoms/StatusBlock';

import useWeatherStatus from '../../../hooks/useWeatherStatus';
import geoLocation from '../../../utils/geoLocation';

const WeatherStatusBlock: React.FC = () => {
  const { weather } = useWeatherStatus();

  return (
    <BlockWrapper className="weather">
      <TitleWrapper>
        <BlockTitle margin={22}>WEATHER</BlockTitle>
        <TemperatureStatus temp={weather.temp} />
      </TitleWrapper>
      <WeatherStatus weatherStatus={weather.status} />
    </BlockWrapper>
  );
};

export default WeatherStatusBlock;
