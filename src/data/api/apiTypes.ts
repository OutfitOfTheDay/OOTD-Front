export interface WeatherStatusApiType {
  weather: {
    status: number;
    temp: number;
  };
}

export interface GetProfileApiType {
  userName: string;
  profile: File;
}
