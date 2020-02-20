<template>
  <v-container>
    <post-form v-if="me" />
    <div>
      <!-- mainPosts를 받아 나열, postcard 컴포넌트에 prop으로 전달 -->
      <post-card v-for="p in mainPosts" :key="p.id" :post="p" />
    </div>
  </v-container>
</template>

<script>
import PostCard from "~/components/PostCard";
import PostForm from "~/components/PostForm";
export default {
  components: {
    PostCard,
    PostForm
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
    }
  }
};
</script>

<style>
</style>