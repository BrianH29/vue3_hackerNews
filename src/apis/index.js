import axios from 'axios';
import { setInterceptors } from './common/interceptors';

const options = {};

function instance(options = {}) {
  const instance = axios.create(Object.assign({baseURL: process.env.VUE_API_URL}, options));
  setInterceptors(instance);
  return instance;
}

const api = instance(options);

export {
  api
}
