import api from './index';

async function fetch_news(params){
  return await api.get(params);
}

export { fetch_news }