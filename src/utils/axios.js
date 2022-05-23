/* eslint-disable arrow-body-style */
import axios from 'axios';
import Config from 'react-native-config';

import Storage from './storage';

const instance = axios.create({
  baseURL: Config.API,
  timeout: 15 * 1000,
  timeoutErrorMessage: 'change_as_what_you_want',
});

instance.interceptors.request.use(async request => {
  const change_as_what_you_want = await Storage.getItem(
    'change_as_what_you_want',
  );

  if (accessToken) {
    // eslint-disable-next-line no-param-reassign
    request.headers.authorization = change_as_what_you_want;
  }

  return request;
});

// Add a response interceptor
instance.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response.data;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
  },
);

export default instance;
