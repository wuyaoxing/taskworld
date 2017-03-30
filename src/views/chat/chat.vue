<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <router-link to="/chat/ca">/user/foo/ar</router-link>
    <router-link to="/chat/cb">/user/foo/bv</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'tw-main',
  data () {
    return {
      msg: 'Welcome to Your chat'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  
</style>
