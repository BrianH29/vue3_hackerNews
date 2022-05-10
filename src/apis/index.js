import axios from 'axios';
import { setInterceptors } from './common/interceptors';

const options = {};

function instance(url, options = {}) {
  const instance = axios.create(Object.assign({baseURL: url}, options));
  setInterceptors(instance);
  return instance;
}

const api = instance(`${import.meta.env.VITE_APP_API_URL}`,options);

export {
  api
}
