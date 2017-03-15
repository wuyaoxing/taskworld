<template>
  <div>
    <h3>Count is {{getCount}}</h3>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'


  export default {
    computed: mapGetters(
      ['getCount']
    )
  }
</script>
