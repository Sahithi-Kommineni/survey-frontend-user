<template>
  <div class="signIn">
    <div class="signIn__left">
      <div class="signIn__left--topHeadings">
        <h1>SURVEY</h1>
        <h5>Manage surveys</h5>
      </div>
      <div class="signIn__left--imgWrapper">
        <img :src="signInDashboardImage" alt="" />
      </div>
    </div>
    <div class="signIn__right">
      <h2>User Sign In</h2>
      <v-form class="signIn__form" @submit="handleSignIn">
        <v-text-field
          v-model="formData.email"
          label="Email"
          :rules="[rules.required, rules.email]"
          outlined
          shaped
        ></v-text-field>
        <v-text-field
          v-model="formData.password"
          label="Password"
          type="password"
          :rules="[rules.required]"
          outlined
        ></v-text-field>
        <button type="submit" class="button__lightGreen">SIGN IN</button>
      </v-form>
    </div>
  </div>
</template>
<script>
import signInDashboardImage from "../../assets/signInDashboard.svg";
export default {
  data() {
    return {
      message: "",
      formData: {
        email: "",
        password: "",
      },
      rules: {
        required: (value) => !!value || `Field Required !`,
        counter: (value) => value.length <= 20 || "Max 20 characters",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
      signInDashboardImage,
    };
  },
  methods: {
    handleSignIn() {
      if (this.formData.email && this.formData.password) {
        this.$router.push({ name: "surveys" });
      }
    },
  },
};
</script>