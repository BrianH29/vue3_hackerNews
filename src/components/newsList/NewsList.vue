<script setup>
  import { useNewsList } from '@/stores/newsList';
  import { useRouter } from 'vue-router';
  const store = useNewsList();
  const router = useRouter()

const clickEvent= (sort , index) => {
  switch(sort){
    case 'title' : 
       location.href = store.getNewsList[index].url
    break;
    case 'user' :
      // router.push(`/user/${store.getNewsList[index].user}`)
      router.push({ name: 'user', query: { id: store.getNewsList[index].user }})
      break;
      case 'comment' : 
      router.push({name : 'comment', query: { id : store.getNewsList[index].id }})
      break;
  }
}

</script>

<template>
  <main>
      <ol>
        <li v-for="(item, index) in store.getNewsList" class="list-wrapper">
          <div class="d-flex align-center list-wrapper-title">
            <span>{{ index + 1 }}.</span>
            <span @click="clickEvent('title', index)" class="clickable">{{ item.title }}</span>
            <span  class="clickable domain"> ({{ item.domain }})</span>
          </div>
          <div class="d-flex align-center list-wrapper-subtitle">
            <span>{{ item.points }} points by</span>
            <span class="clickable" @click="clickEvent('user', index)">{{ item.user }}</span>
            <span>{{ item.time_ago }}</span>
            <span class="clickable" @click="clickEvent('comment', index)">{{ item.comments_count }} comments</span>
          </div>
        </li>
      </ol>
  </main>
</template>


<style lang="scss" scoped>
.list-wrapper{
  margin-bottom: 0.3rem;

  &-title{
    gap: 0.4rem;

    .domain{
      @include textStyle(grey, 0.7rem)
    }
  }

  &-subtitle{
    gap: 0.4rem;
    @include textStyle(grey, 0.7rem)
  }

}

 .clickable {
      cursor: pointer;
    }
</style> 