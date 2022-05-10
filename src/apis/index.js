import axios from 'axios';
import { setInterceptors } from './common/interceptors';

const options = {};
// const url = process.env.VUE_APP_API_URL;

function instance(url, options = {}) {
  const instance = axios.create(Object.assign({baseURL: url}, options));
  setInterceptors(instance);
  return instance;
}

const api = instance(`${VUE_APP_API_URL}`,options);
// const api = instance(`https://hacker-news.firebaseio.com/v0/`,options);

export {
  api
}
