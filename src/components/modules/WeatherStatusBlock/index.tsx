import * as React from 'react';

import {
  BlockTitle,
  BlockWrapper,
  TemperatureStatus,
  TitleWrapper,
  WeatherStatus,
} from 'atoms/StatusBlock';

const WeatherStatusBlock: React.FC = () => (
  <BlockWrapper height={160}>
    <TitleWrapper>
      <BlockTitle margin={22}>WEATHER</BlockTitle>
      <TemperatureStatus />
    </TitleWrapper>
    <WeatherStatus />
  </BlockWrapper>
);

export default WeatherStatusBlock;
