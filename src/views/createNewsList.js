import { h } from 'vue'
import ListView from '@/views/newsList/index.vue'

export default function createNewsList(name){
  return{
    name,
    render(){
      return h(ListView);
    }
  }
}