import axios from 'axios';


const instanceAxios = axios.create({
  baseURL: 'http://10.156.145.162:1212',
  headers: { userId: '5edc9b14e7179a6b6367fee9' },
});

export const getWeatherStatusApi = async (payload: {
  lat: number;
  lon: number;
}) => {
  const response = await instanceAxios.get('/weather', {
    params: {
      lat: payload.lat,
      lon: payload.lon,
    },
  });
  return response.data;
};
