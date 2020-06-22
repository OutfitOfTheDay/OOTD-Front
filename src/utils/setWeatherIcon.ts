import { weather } from 'assets/index';

export default function setWeatherIcon(weatherStatus: number): string {
  switch (weatherStatus) {
    case 1:
      return weather.enabled.clear;
    case 2:
      return weather.enabled.cloudy;
    case 3:
      return weather.enabled.rain;
    case 4:
      return weather.enabled.rain_snow;
    case 5:
      return weather.enabled.snow;
  }
}
