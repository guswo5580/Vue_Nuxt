<template>
  <div>
    <v-container>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>내 프로필</v-subheader>
          <v-form v-model="valid" @submit.prevent="onChangeNickname">
            <v-text-field
              v-model="nickname"
              label="닉네임"
              :rules="nicknameRules"
              required
            />
            <v-btn dark color="blue" type="submit">수정</v-btn>
          </v-form>
        </v-container>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>팔로잉</v-subheader>
          <!-- props 변화를 통해 같은 컴포넌트를 다르게 이용 -->
          <follow-list :users="followingList" :remove="removeFollowing" />
          <v-btn
            @click="loadMoreFollowings"
            v-if="hasMoreFollowing"
            dark
            color="blue"
            style="width: 100%"
            >더보기</v-btn
          >
        </v-container>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>팔로워</v-subheader>
          <!-- props 변화를 통해 같은 컴포넌트를 다르게 이용 -->
          <follow-list
            :abc="abc"
            :users="followerList"
            :remove="removeFollower"
          />
          <v-btn
            @click="loadMoreFollowers"
            v-if="hasMoreFollower"
            dark
            color="blue"
            style="width: 100%"
            >더보기</v-btn
          >
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import FollowList from "~/components/FollowList";

export default {
  components: {
    FollowList
  },
  data() {
    return {
      valid: false,
      nickname: "",
      nicknameRules: [v => !!v || "닉네임을 입력하세요."]
    };
  },
  methods: {
    onChangeNickname() {
      this.$store.dispatch("users/changeNickname", {
        nickname: this.nickname
      });
    }
  },
  head() {
    return {
      title: "프로필"
    };
  }
};
</script>

<style></style>
