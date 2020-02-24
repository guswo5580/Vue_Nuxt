<template>
  <v-container>
    <post-form v-if="me" />
    <div>
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
  //state의 값을 꺼내오기
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

  //화면이 렌더링 되기 전 fetch를 통해 Post요청
  fetch({ store }) {
    store.dispatch("posts/loadPosts");
  },

  //화면 부착 시!!!, created로 사용하지 않는 것에 주의
  mounted() {
    //스크롤 인식!!
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    //제거를 통해 메모리 누수 방지
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      console.log("scroll");
      if (
        //window.scrollY = 현재 화면의 Y축 계산 --- scroll을 Y축으로 얼마나 움직였는가
        //clientHeight = 페이지 최상단 ~ 화면에 표시된 페이지 최하단
        //scrollHeight = 페이지 최상단 ~ 렌더링된 화면 전체의 페이지 최하단
        //렌더링된 화면 전체의 페이지 최하단 시!!
        //scrollY + clientHeight = scrollHeight
        //따라서, 최하단이 아닌 중간지점일 경우
        //scrollY + clientHeight < scrollHeight
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
        //scroll은 === 를 통해 비교하면 정확하지 않음!! 따라서 부등호를 이용
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
