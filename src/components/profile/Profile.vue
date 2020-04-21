<template>
  <div>
    <HeaderBar></HeaderBar>
    <div>
      <img :src="$auth.user.picture">
      <h2>{{ $auth.user.name }}</h2>
      <p>{{ $auth.user.email }}</p>
    </div>

    <div>
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div>
    <button class="btn btn-primary mt-5" type="button" name="blacklist" @click="callApi">Get Blacklist</button>
  </div>
</template>

<script type="text/javascript">
  import HeaderBar from '@/components/ui/GHeaderBar.vue'

  export default {
    components: {
      HeaderBar
    }
  }
</script>
