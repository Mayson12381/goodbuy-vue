import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueInputAutowidth from 'vue-input-autowidth'
// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";
// Import the plugin here
import { Auth0Plugin } from "./auth";
// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.use(VueAxios, axios)
Vue.use(VueInputAutowidth)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
