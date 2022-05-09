import ListView from '@/views/newsList/index.vue'

export default function createNewsList(name){
  return{
    name,
    render(createElement){
      return createElement(ListView);
    }
  }
}