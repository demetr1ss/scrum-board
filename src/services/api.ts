import axios, {AxiosInstance} from 'axios';

export const BASE_URL = 'https://api.jsonserver.io/tasks';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT
});
