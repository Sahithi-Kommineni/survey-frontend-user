<template>
  <div class="header">
    <div class="header__left">
      <router-link class="header__logo" to="/">SURVEY</router-link>
    </div>
    <div class="header__right">
      <router-link class="header__right--link" to="/surveys" v-if="this.$route.path !== '/'">SURVEYS</router-link>
      <button class="button__white--bordered" @click="handleSignOut">Sign Out</button>
    </div>
  </div>
</template>
<script>
import AuthService from "../../services/AuthService";
export default {
  methods: {
    handleSignOut() {
      const userId = localStorage.getItem("userId");
      AuthService.signOut(userId).then((response) => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        localStorage.removeItem("role");
        localStorage.removeItem("email");
        localStorage.removeItem("userId");
        this.$router.push({ name: "signIn" });
      });
    }
  }
};
</script>