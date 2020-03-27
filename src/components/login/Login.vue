<template>
  <div class="home">
    <HeaderBar></HeaderBar>
    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button v-if="!$auth.isAuthenticated" @click="login" class="auth-button">Log in</button>
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="logout" class="auth-button">Log out</button>
    </div>
  </div>
</template>
<script>
// .. imports removed for brevity
import HeaderBar from '@/components/intro/IntroViewHeaderBar.vue'
export default {
  name: "login",
  components: {
    HeaderBar
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>
<style scoped>
.auth-button {
  font-size: 2rem;
  position: fixed;
  left: 50%;
  bottom: 40%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}
</style>