import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import AuthUtils from '../shared/util/auth-utils';

//mudar
const createApiInstance = (): AxiosInstance => {
  const config: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 60 * 1000
  };

  const instance = axios.create(config);
  // tslint:disable-next-line: no-shadowed-variable
  instance.interceptors.request.use(async config => {
    const token = AuthUtils.getToken();
    if (token) {
      // config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  return instance;
};

export const api = createApiInstance();
export default {
  api
};
