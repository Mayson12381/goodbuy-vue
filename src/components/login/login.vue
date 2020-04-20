<template>
  <div>
    <HeaderBar />
      <button v-if="!$auth.isAuthenticated" @click="onClickLogin">Log in</button>
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="onClickLogout">Log out</button>
  </div>
</template>

<script>
import HeaderBar from '@/components/ui/GHeaderBar.vue'


export default {
  name: 'login',
  components: {
    HeaderBar
  },
  methods: {
    // Log the user in
    onClickLogin() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    onClickLogout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>
