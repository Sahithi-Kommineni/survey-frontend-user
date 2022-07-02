<template>
  <v-app>
      <Header v-if="currentPath !== '/signin'" />
      <router-view />
  </v-app>
</template>
<script>
import Header from "./components/Header/Header.vue";
import './styles/index.css';
export default {
  name: "App",
  components: {
    Header,
  },
  data: () => ({
    currentPath: "",
  }),
  created() {
     const isAuthenticated = sessionStorage.getItem("authenticated");
    if (isAuthenticated === "true") {
      this.$router.push({ name: "surveys" });
    } else {
      this.$router.push({ name: "signIn" });
    }
    this.$watch(
      () => this.$route.params,
      () => {
        this.currentPath = this.$route.path;
      }
    );
  },
};
</script>