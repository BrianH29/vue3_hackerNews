import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function instance() {
  const instance = axios.create({
    baseURL: 'https',
  });
  return setInterceptors(instance);
}

export const api = instance();
