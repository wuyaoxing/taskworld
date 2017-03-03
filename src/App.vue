<template>
  <div id="app">
    <tw-header></tw-header>
    <tw-sidebar></tw-sidebar>
    <div class="tw-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import header from './components/header.vue'
  import sidebar from './components/sidebar.vue'
  export default {
    name: 'app',
    components: {
      'tw-header': header,
      'tw-sidebar': sidebar
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px
    .tw-content
      padding 10px
      background rgb(230, 232, 236)
      position absolute
      top 45px
      left 45px
      right 0px
      bottom 0px
      overflow hidden
      z-index 0
      webkit-transition .2s ease-in-out
      transition .2s ease-in-out
</style>
