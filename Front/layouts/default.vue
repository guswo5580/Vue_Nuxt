<template>
  <!-- Nuxt의 라우터 설정 -->
  <div>
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/profile">profile</nuxt-link>
      <nuxt-link to="signup">SignUp</nuxt-link>
    </nav>

    <!-- pages에서 호출하는 페이지 -->
    <nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
