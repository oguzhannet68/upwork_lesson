<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="login">Login</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["login"]),
    async login() {
      await this.login({
        name: "John Doe",
        email: "  ",
      });
    },
  },
};
</script>
