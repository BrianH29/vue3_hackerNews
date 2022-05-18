import { api } from './index.js';

async function fetch_user(params){
  return await api.get(`user/${params}.json?print=pretty`);
}

export { fetch_user }