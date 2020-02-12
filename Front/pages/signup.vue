<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-subheader>회원가입</v-subheader>
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <v-text-field
              v-model="email"
              label="이메일"
              type="email"
              :rules="emailRules"
              required
            />
            <v-text-field
              v-model="password"
              label="비밀번호"
              type="password"
              :rules="passwordRules"
              required
            />
            <v-text-field
              v-model="passwordCheck"
              label="비밀번호확인"
              type="password"
              :rules="passwordCheckRules"
              required
            />
            <v-text-field
              v-model="nickname"
              label="닉네임"
              type="nickname"
              :rules="nicknameRules"
              required
            />
            <v-checkbox
              v-model="terms"
              required
              :rules="[v => !!v || '약관에 동의해야 합니다.']"
              label="예시입니다."
            />
            <v-btn color="green" type="submit">가입하기</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 모든 Data가 작성되었을 때
      valid: false,

      // 회원가입 시 Data
      email: "",
      password: "",
      passwordCheck: "",
      nickname: "",
      terms: false,

      // Vuetify 내 input Data에 대한 규칙 설정
      // template 내에서 설정해도 무관
      emailRules: [
        v => !!v || "이메일은 필수입니다.",
        v => /.+@.+/.test(v) || "이메일이 유효하지 않습니다."
      ],
      nicknameRules: [v => !!v || "닉네임은 필수입니다."],
      passwordRules: [v => !!v || "비밀번호는 필수입니다."],
      passwordCheckRules: [
        v => !!v || "비밀번호 확인은 필수입니다.",
        v => v === this.password || "비밀번호가 일치하지 않습니다."
      ]
    };
  },
  methods: {
    onSubmitForm() {
      // Vuetify 내 validate의 판별 속성 이용
      // 모든 Data가 작성되어 valid 변수가 true로 바뀌는 것을 확인
      if (this.$refs.form.validate()) {
        alert("회원가입 시도!");
      } else {
        alert("폼이 유효하지 않습니다.");
      }
    }
  },
  head() {
    return {
      title: "회원가입"
    };
  }
};
</script>

<style></style>
