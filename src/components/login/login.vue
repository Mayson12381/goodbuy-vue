<template>
  <div class="home">
    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->

      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>

      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>
  </div>
</template>

<script>
// import AuthService from '@/auth/AuthService'
import axios from 'axios'

const API_URL = 'http://localhost:8080'
// const auth = new AuthService()

export default {
  name: 'login',
  // data () {
  //   return {
  //     authenticated: false,
  //     message: ''
  //   }
  // },
  // mounted() {
  //   this.handleAuthentication()
  //   this.authenticated = false
  //
  //   auth.authNotifier.on('authChange', authState => {
  //     this.authenticated = authState.authenticated
  //   })
  // },
  // methods: {
  //   login() {
  //     auth.login()
  //   },
  //   handleAuthentication() {
  //     auth.handleAuthentication()
  //   },
  //   logout () {
  //     auth.logout()
  //     localStorage.setItem('user_id', '')
  //     localStorage.setItem('auth_token', '')
  //   },
  //   privateMessage() {
  //     localStorage.setItem('user_id', auth.profile.sub.split('|')[1])
  //     localStorage.setItem('auth_token', auth.getAuthToken())
  //     const url = `${API_URL}/product/barcode/12/`
  //     return axios.get(url, {headers: {Authorization: `Bearer ${auth.getAuthToken()}`}}).then((response) => {
  //       this.message = response.data || ''
  //     })
  //   }
  // }
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
