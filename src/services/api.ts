import axios, {AxiosInstance} from 'axios';

export const BASE_URL = 'https://scrum-board-6af76-default-rtdb.europe-west1.firebasedatabase.app/';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
});
