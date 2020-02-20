<template>
  <!-- 링크 등을 통해 하나의 게시글만 확인할 경우 동적 라우팅을 이용
  id를 통한 게시글을 도출 -->
  <v-container v-if="post">
    <post-card :post="post" />
  </v-container>
  <div v-else>
    해당 아이디의 게시글이 존재하지 않습니다.
  </div>
</template>

<script>
// post / _id.vue를 매칭하는 형태!!!

import PostCard from "~/components/PostCard";

export default {
  components: {
    PostCard
  },
  computed: {
    post() {
      return this.$store.state.posts.mainPosts.find(
        v => v.id === parseInt(this.$route.params.id, 10)
        //state의 mainPost의 해당 게시글의 id === Router의 param 번호
        //를 비교하여 페이지를 렌더링
      );
    }
  }
};
</script>

<style></style>
