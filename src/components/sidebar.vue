<template>
  <div class="sidebar">
    <div class="tw-add"><i class="">+</i></div>
    <div class="tw-left-nav">
      <div class="tw-menu-item">
        <div class="menu-item">
          <router-link to="/tasks">概览</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/">项目</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/people">成员</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/chat">聊天</router-link>
        </div>
      </div>
      <div class="tw-chat-heads">
        <div class="tw-chat-head" style="transformn:translateY(-9px)">
          头像
        </div>
        <div class="tw-chat-head" style="transformn:translateY(-57px)">
          聊天
        </div>
        <div class="tw-chat-divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tw-sidebar',
  data () {
    return {
      msg: 'Welcome to Your sidebar'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .sidebar
    width 45px
    height 100%
    font-size 14px
    position absolute
    top 0
    left 0
    z-index 0
    background #1f5c87
    box-shadow 1px 0 3px 0 rgba(0,0,0,.4)
    .tw-add
      width 45px
      height 45px
      line-height 45px
      position absolute
      top 0
      left 0
      z-index 3
      color #fff
      background #4882ab
      cursor pointer
      font-size 30px
      -webkit-transition .2s ease-in-out
      transition .2s ease-in-out
      -webkit-transform-origin top left
      transform-origin top left
      &:hover
        -webkit-transition .2s ease-in-out
        transition .2s ease-in-out
        -webkit-transform scale(1.1)
        transform scale(1.1)
        -webkit-transform-origin top left
        transform-origin top left
    .tw-left-nav
      text-align center
      line-height 48px
      margin-top 45px
      .tw-menu-item
        .menu-item
          width 45px
          height 48px
          color #bbdaef
          &:hover
            background transparent
            background #323742
            a
              color #fff
          a
            color #bbdaef
            text-decoration none
      .tw-chat-heads
        width 100%
        position absolute
        left 0
        bottom 0
        color #bbdaef
        .tw-chat-head
          &:hover
            background transparent
            background #323742
            color #fff
        .tw-chat-divider
          width 100%
          height 1px
          background #2c6a95
          transform translateY(-105px)
</style>
