<template>
  <div>
    <button @click="incrementCounter">Increment +1</button>
    <button @click="incrementReduce">Increment -1</button>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    methods: mapActions([
      'incrementCounter',
      'incrementReduce'
    ])
  }
</script>
