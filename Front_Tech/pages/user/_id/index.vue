<template>
  <!-- 유저 이름 클릭, 검색 시 표현하는 라우터 -->
  <!-- page의 index.vue와 같은 것으로 표현!!! -->
  <v-container>
    <div>
      <post-card v-for="p in mainPosts" :key="p.id" :post="p" />
    </div>
  </v-container>
</template>

<script>
import PostCard from "~/components/PostCard";

export default {
  components: {
    PostCard
  },
  data() {
    return {
      name: "Nuxt.js"
    };
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    },
    mainPosts() {
      return this.$store.state.posts.mainPosts;
    },
    hasMorePost() {
      return this.$store.state.posts.hasMorePost;
    }
  },
  fetch({ store }) {
    // 게시글 불러오기 요청
    store.dispatch("posts/loadPosts");
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      console.log("scroll");
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (this.hasMorePost) {
          this.$store.dispatch("posts/loadPosts");
        }
      }
    }
  }
};
</script>

<style></style>
