<template>
  <chat :list="data" @on-send="sendMsg"></chat>
</template>
<script>
import chat from '@/components/chat/tplChat.vue'
import { getData, send } from '@/service/chatService'
export default {
  components: {
    chat
  },
  methods: {
    sendMsg (msg) {
      console.log('[RX]: send ', msg)
      send(msg)
    }
  },
  subscriptions: {
    data: getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  
</style>
