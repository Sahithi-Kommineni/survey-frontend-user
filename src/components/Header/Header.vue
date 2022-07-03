<template>
  <div class="header">
    <div class="header__left">
      <router-link class="header__logo" to="/">SURVEY</router-link>
    </div>
    <div class="header__right">
      <router-link class="header__right--link" to="/surveys"  v-if="this.$route.path !== '/'"
        >SURVEYS</router-link
      >
      <button class="button__white--bordered">Sign Out</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>