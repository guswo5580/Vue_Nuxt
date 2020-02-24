<template>
  <v-app>
    <nav>
      <v-toolbar dark color="green">
        <v-toolbar-title>
          <nuxt-link to="/">NuxtJS</nuxt-link>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <!-- 검색 기능 활성화 -->
          <v-form @submit.prevent="onSearchHashtag">
            <div
              :style="{ display: 'flex', height: '100%', alignItems: 'center' }"
            >
              <v-text-field
                v-model="hashtag"
                label="검색"
                hide-details
                prepend-icon="mdi-magnify"
              />
            </div>
          </v-form>
          <v-btn
            text
            nuxt
            to="/profile"
            :style="{ display: 'flex', alignItems: 'center' }"
          >
            <div>프로필</div>
          </v-btn>
          <v-btn
            text
            nuxt
            to="/signup"
            :style="{ display: 'flex', alignItems: 'center' }"
          >
            <div>회원가입</div>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </nav>
    <v-row no-gutters>
      <v-col cols="12" md="4">
        <!-- 페이지가 변해도 로그인, 로그아웃 부분은 항상 표현 -->
        <login-form />
      </v-col>
      <v-col cols="12" md="8">
        <!-- Nuxt의 pages로 설정한 것이 자동으로 표현 -->
        <nuxt />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import LoginForm from "~/components/LoginForm";

export default {
  components: {
    LoginForm
  },
  data() {
    return {
      hashtag: ""
    };
  },
  methods: {
    // 해시태그 검색기능 활성화
    onSearchHashtag() {
      this.$router.push({
        path: `/hashtag/${this.hashtag}`
      });
      // 검색 후 검색내역 삭제
      this.hashtag = "";
    }
  }
};
</script>

<style scoped>
a {
  display: inline-block;
  text-decoration: none;
  color: inherit;
}
</style>
