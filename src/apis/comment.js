import { api } from './index.js';

async function fetch_comment(params){
  return await api.get(`item/${params}.json`);
}

export { fetch_comment }