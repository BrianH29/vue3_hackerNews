import{_ as d,d as h,o as _,c as i,a as e,t as o,b as a,p as w,e as f,f as C,F as $,r as k,g}from"./index.71756d00.js";const b=t=>(w("data-v-21b249d8"),t=t(),f(),t),x={class:"single-wrapper"},y={class:"d-flex align-center single-wrapper-title"},L=b(()=>e("span",{class:""},"\u25FF",-1)),N={class:"clickable domain"},S={class:"d-flex align-center single-wrapper-subtitle"},M={setup(t){const s=h(),l=C(),m=n=>{switch(n){case"user":l.push({name:"user",query:{id:s.getCommentList.user}});break}};return(n,c)=>(_(),i("section",x,[e("div",y,[L,e("span",null,o(a(s).getCommentList.title),1),e("span",N,o(a(s).getCommentList.domain),1)]),e("div",S,[e("span",null,o(a(s).getCommentList.points)+" points by",1),e("span",{class:"clickable",onClick:c[0]||(c[0]=r=>m("user"))},o(a(s).getCommentList.user),1),e("span",null,o(a(s).getCommentList.time_ago),1),e("span",null,o(a(s).getCommentList.comments_count)+" comments",1)])]))}};var D=d(M,[["__scopeId","data-v-21b249d8"],["__file","D:/study/vue3_hackerNews/src/components/SingleNewsHeader.vue"]]);const I=t=>(w("data-v-b934258a"),t=t(),f(),t),H={class:"d-flex wrapper__info"},E=I(()=>e("span",null,"\u25E2",-1)),F=["innerHTML"],B={class:"wrapper__more"},T=["onClick"],R={setup(t){const s=h(),l=s.getCommentList;s.$onAction(({name:n,store:c,after:r,onError:p})=>{const v=Date.now();r(u=>{console.log(`Finished "${n}" after ${Date.now()-v}ms.
Result: ${{result:u}}.`)}),p(u=>{console.warn(`Failed "${n}" 
 Error : ${u}`)})});const m=(n,c)=>{switch(n){case"showMore":s.moreComment(c);break}};return(n,c)=>(_(),i("article",null,[(_(!0),i($,null,k(a(l).comments,(r,p)=>(_(),i("section",{key:p,class:"wrapper"},[e("div",H,[E,e("span",null,o(r.user),1),e("span",null,o(r.time_ago),1)]),e("div",{innerHTML:r.content,class:"wrapper__content"},null,8,F),e("div",B,[e("span",{onClick:v=>m("showMore",p)},"more comment",8,T)])]))),128))]))}};var V=d(R,[["__scopeId","data-v-b934258a"],["__file","D:/study/vue3_hackerNews/src/components/comments/MainComment.vue"]]);const q={setup(t){return(s,l)=>(_(),i("main",null,[g(D),g(V)]))}};var j=d(q,[["__file","D:/study/vue3_hackerNews/src/views/comment/index.vue"]]);export{j as default};