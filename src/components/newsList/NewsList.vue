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
  }
}

</script>

<template>
  <div>
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
            <span class="clickable">{{ item.time_ago }}</span>
            <span class="clickable">{{ item.comments_count }} comments</span>
          </div>
        </li>
      </ol>
  </div>
</template>


<style lang="scss" scoped>
.list-wrapper{
  margin-bottom: 0.3rem;

  &-title{
    gap: 0.4rem;

    .domain{
      font-size: 0.7rem;
      color: grey;
    }
  }

  &-subtitle{
    gap: 0.4rem;
    font-size: 0.7rem;
    color: grey;
  }

}

 .clickable {
      cursor: pointer;
    }
</style> 