<template lang="html">
  <div class="header-bar">
    <div class="logo">
      <GLogoWhite />
    </div>
    <div class="title" :class="{ 'title__desktop': desktop }" ref="name">goodbuy</div>
    <div class="signup" v-if="loggedIn == false">SignIn</div>
    <ProfileLogo v-else-if="loggedIn == true"/>
  </div>
</template>

<script>
import GLogoWhite from '@/assets/logo/GLogoWhite'
import ProfileLogo from '@/assets/profile/user.svg'

export default {
  name: 'HeaderBar',
  components: {
    GLogoWhite,
    ProfileLogo,
  },
  data() {
    return {
      loggedIn: ''
    }
  },
  props: {
    desktop: {
      type: Boolean,
      default: false,
    }
  },
  created() {
    this.loggedIn = this.$store.state.loggedIn
    console.log(this.loggedIn)
  }
}
</script>

<style lang="scss" scoped>
.header-bar {
  padding: .3rem;
  overflow: hidden;
  background-color: #272727;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .logo {
    position: absolute;

    svg {
      width: 40px;
      height: 40px;
    }
  }
  .signup {
    color: white;
  }

  .title {
    margin: auto;
    text-align: center;
    font-family: 'Avenir';
    color: white;
    font-size: 12vw;

    &__desktop {
      font-size: 3vw;
    }
  }
}
</style>
