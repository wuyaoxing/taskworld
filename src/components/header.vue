<template>
  <div class="header">
    <div class="tw-top-nav_left">
      <div class="search">
        <div class="search-wrapper">
          <input type="text">
          <div class="icon-search">X</div>
        </div>
      </div>
      <div class="info">您的试用期将在％{smart_count}天内到期。 请联系管理员，以升级工作区</div>
    </div>
    <div class="tw-top-nav_right">
      <div class="top-menu-item">消息</div>
      <div class="top-menu-item">活动</div>
      <div class="top-menu-item">帮助</div>
      <div class="wrapper">
        <div class="top-menu-button">
          <span>hydt</span>
        </div>
        <img width="45" height="45" src="https://enterprise-cdn.taskworld.com/assets/default-avatar-4dc02b82.svg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tw-header',
  data () {
    return {
      msg: 'Welcome to Your header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    height 45px
    font-size 14px
    text-align center
    line-height 45px
    color #bbdaef
    position absolute
    top 0
    right 0
    z-index 0
    background #1f5c87
    box-shadow 0 1px 3px 0 rgba(0,0,0,.4)
    -webkit-box-pack justify
    justify-content space-between
    .tw-top-nav_left
      display flex
      margin-left 50px
      color #fff
      .search
        display flex
        width 300px
        height 29px
        position relative
        margin 8px
        margin-right 10px
        .search-wrapper
          position absolute
          top 0
          left 0
          right 0
          bottom 0
          border-radius 2px
          font-size 14px
          color #bbdaef
          background #154566
          input
            width 100%
            height 100%
            padding-left 6px
            padding-right 30px
            outline none
            border none
            box-sizing border-box
            background transparent
            position relative
            top -6px
          .icon-search
            // display flex
            line-height 29px
            position absolute
            top 0
            right 0
            bottom 0
            width 30px
      .info
        width auto
        font-size 12px
        margin-right 10px
    .tw-top-nav_right
      display flex
      position absolute
      top 0
      right 0
      .top-menu-item
        width 44px
        border-left 2px solid #2c6a95
        height 45px
        cursor pointer
        &:hover
          color #fff
      .wrapper
        display flex
        cursor pointer
        border-left 2px solid #2c6a95
        .top-menu-button
          width 204px
          height 45px
          color #deecf6
          span
            white-space pre
            text-overflow ellipsis
            overflow hidden
          

</style>
