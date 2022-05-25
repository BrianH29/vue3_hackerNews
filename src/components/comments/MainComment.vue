<script setup>
import { useComment } from '@/stores/comment';

const store = useComment();
const data = store.getCommentList;

 store.$onAction(({name, store, after, onError}) => {
       const startTime = Date.now();

      after((result) => {
        console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${{result}}.`
      )
    })

    onError(error => {
      console.warn(`Failed "${name}" \n Error : ${error}`)
    })
  })

const clickEvent = (sort, idx) => {
  switch(sort){
    case 'showMore' :
      store.moreComment(idx);
      break;
  }
}
</script>

<template>
<article>
  <section v-for="(item, idx) in data.comments" :key="idx" class="wrapper">
    <div class="d-flex wrapper__info">
      <span>◢</span>
      <span>{{ item.user }} </span>
      <span>{{ item.time_ago }}</span>
    </div>
    <div v-html="item.content" class="wrapper__content"></div>
    <div class="wrapper__more">
      <span @click.native="clickEvent('showMore', idx)">more comment</span>
    </div>
  </section>
</article>
</template>


<style lang="scss" scoped>
.wrapper{
  margin-bottom: 1.3rem;

  #{&}__info {
    gap : 0.4rem;

    span {
      @include textStyle(grey, 0.7rem)
    }
  }

  #{&}__content {
    margin: 0 1rem;
    @include textStyle(#2b2d2f, 0.8rem);
  }

  #{&}__more {
    span {
      margin: 0 1rem;
      @include textStyle(coral, 0.6rem);
      cursor: pointer;
    }
  }
}
</style>