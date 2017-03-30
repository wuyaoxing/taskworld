<template>
  <div class="chooseteam">
    <div class="team-menu">
      <div class="team-menu-item" v-for="team in teams"><router-link :teamid="team.teamId" :to="{ name: 'team', params: { user: user, teamId: team.teamId }}">{{team.teamName}}</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tw-sidebar',
  data () {
    return {
      user: this.$store.state.login.token.uid,
      teams: [
        {
          teamId: 1000001,
          teamName: '我的项目'
        },
        {
          teamId: 1000002,
          teamName: '设计项目'
        },
        {
          teamId: 1000003,
          teamName: '前端项目'
        },
        {
          teamId: 1000004,
          teamName: '后端项目'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
  },
  mounted() {
    this.$router.push({
      params: {
        user: this.user
      }
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .fade-enter-active, .fade-leave-active
    transition opacity .5s
  .fade-enter, .fade-leave-active
    opacity 0
  .chooseteam
    width 45px
    height 100%
    font-size 14px
    position absolute
    top 0
    left 0
    z-index 1
    background #1f5c87
    box-shadow 1px 0 3px 0 rgba(0,0,0,.4)
    .team-menu
      position absolute
      top 45px
      left 0
      width 230px
      padding 10px
      background #fff
      border-radius 0 2px 2px 0
      box-shadow 0 2px 11px 0 rgba(0,0,0,.35)
      box-sizing border-box
      .team-menu-item
        width auto
        height 45px
        line-height 45px
        padding 0 10px
        margin-bottom 2px
        cursor pointer
        font-size 14px
        color #464c59
        border-radius 2px
        display flex
        &:hover
          background #1f5c87
          color #fff
</style>
