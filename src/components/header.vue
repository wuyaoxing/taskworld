<template>
  <div class="header">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
