import axios, {AxiosInstance} from 'axios';

export const BASE_URL = 'https://api.jsonserver.io';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => axios.create({
  baseURL: BASE_URL,
  headers: {'X-Jsio-Token': '9488a79931fd39af4113c2b231cd660e'},
  timeout: REQUEST_TIMEOUT
});
