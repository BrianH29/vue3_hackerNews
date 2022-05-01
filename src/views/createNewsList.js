import ListView from '@/views/newsList/index.vue'

export default function createNewsList(name){
  return{
    name,
    async created(){
      await this.$store.dispatch('');
    },
    render(createElement){
      return createElement(ListView);
    }
  }
}