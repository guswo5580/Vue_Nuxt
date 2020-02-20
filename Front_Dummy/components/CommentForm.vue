<template>
  <v-form ref="form" v-model="valid" style="position: relative" @submit.prevent="onSubmitForm">
    <v-textarea
      v-model="content"
      filled
      auto-grow
      label="댓글 달기"
      :hide-details="hideDetails"
      :success="success"
      :success-messages="successMessages"
      @input="onChangeTextarea"
    />
    <v-btn color="green" dark absolute top right type="submit">확인</v-btn>
  </v-form>
</template>

<script>
export default {
  //props로 전달받는 Data는 최대한 자세하게
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      valid: false,
      content: "",

      //textarea의 prop 속성의 이용
      success: false,
      successMessages: "",
      hideDetails: true
    };
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    }
  },
  methods: {
    //textarea 내용 검증
    onChangeTextarea(value) {
      if (value.length) {
        this.hideDetails = true;
        this.success = false;
        this.successMessages = "";
      }
    },
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("posts/addComment", {
            id: Date.now(),
            postId: this.postId,
            content: this.content,
            User: {
              nickname: this.me.nickname
            }
          })
          .then(() => {
            //내용 초기화
            this.content = "";
            this.success = true;
            this.successMessages = "댓글이 작성되었습니다.";
            this.hideDetails = false;
          })
          .catch(() => {});
      }
    }
  }
};
</script>

<style>
</style>