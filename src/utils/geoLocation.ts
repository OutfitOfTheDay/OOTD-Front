import { GetWeatherStatus } from '../data/modules/WeatherStatus';

export default function gps(
  setWeatherStatus: (lat: number, lon: number) => GetWeatherStatus,
) {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position =>
          setWeatherStatus(position.coords.latitude, position.coords.longitude),
        () => setWeatherStatus(37.5642135, 127.0016985),
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        },
      );
    } else {
      alert('GPS를 지원하지 않습니다');
    }
  }
  getLocation();
}
