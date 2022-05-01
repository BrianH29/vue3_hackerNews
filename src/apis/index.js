import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function instance() {
  const instance = axios.create({
    baseURL: process.env.VUE_API_URL,
  });
  return setInterceptors(instance);
}

export const api = instance();