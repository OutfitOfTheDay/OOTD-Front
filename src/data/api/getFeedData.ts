import axios from 'axios';
const baseURL: string = 'http://10.156.145.162:1212';

export const getFeedData = async (): Promise<any> => {
  try {
    const response = await axios.get(
      `${baseURL}/feed?sortN=${1}&status=${1}&temp=${25}`,
    );
    return [response.data, response.data.code];
  } catch (err) {
    console.log(err);
    return err;
  }
};
