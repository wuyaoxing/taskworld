<template>
  <div class="header">
    <div class="tw-top-nav_left">
      <div class="search">
        <div class="search-wrapper">
          <input type="text">
          <div class="icon-search">X</div>
        </div>
      </div>
      <div class="info"><span v-show="isLogin()">欢迎您，<router-link to="/person">{{!!user?user.userName:''}}</router-link></span></div>
    </div>
    <div class="tw-top-nav_right">
      <!--<div class="top-menu-item"><router-link to="/calendar">日历</router-link></div>-->
      <div class="top-menu-item" @click="mockfn">消息</div>
      <div class="top-menu-item" @click="fetch('http://local2222')">活动</div>
      <div class="top-menu-item" @click="testCache">帮助</div>
      <div class="wrapper" @click="showMenu()">
        <div class="top-menu-button">
          <span>hydt</span>
        </div>
        <img width="45" height="45" src="https://enterprise-cdn.taskworld.com/assets/default-avatar-4dc02b82.svg">
      </div>
      <transition name="fade">
        <div class="tw-add-menu" v-show="isShowMenu">
          <!--<div class="add-menu-item" v-if="!isLogin()"><router-link to="/login">登录</router-link></div>-->
          <!--<div class="add-menu-item" v-if="!isLogin()"><router-link to="/reg">注册</router-link></div>-->
          <div class="add-menu-item"><router-link to="/">首页</router-link></div>
          <div class="add-menu-item"><router-link to="/person">个人中心</router-link></div>
          <div class="add-menu-item" v-if="isLogin()"><router-link to="/person">[<a href="javascript:void(0);" @click="userLogout()">退出</a>]</router-link></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Mock from 'mockjs'
import axios from 'axios'
import { Observable } from 'rxjs/Observable'
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'tw-header',
  data () {
    return {
      isShowMenu: false,
      user: {},
      msg: 'Welcome to Your header',
      mocka: '',
      mockb: '',
      cache: ''
    }
  },
  computed: {
    ...mapGetters([
      'UserInfo'
    ])
  },
  methods: {
    ...mapActions([
      'UserLogout'
    ]),
    showMenu: function () {
      this.isShowMenu = !this.isShowMenu
    },
    isLogin () {
      var vm = this
      return vm.UserInfo
    },
    getUser () {
      var vm = this
      vm.user = vm.UserInfo
    },
    userLogout () {
      var vm = this
      vm.$store.dispatch('UserLogout', vm.user)
    },
    mockfn: function () {
      this.mocka = Mock.mock({
        'list|1-10': [{
          // 'id|+1': 5,
          'gid': '@guid',
          'mid': '@id',
          'number|8-8': '@number',
          'bid|1': '@boolean',
          uid: '@id',
          cname: '@cname',
          date: '@date',
          image: '@image',
          text: '@text',
          name: '@name',
          web: '@web',
          address1: '@zip',
          address2: 'province',
          helper: '@helper',
          email: '@email',
          color: '@color',
          content: '@cparagraph'
        }]
      })
      console.log(this.mocka)
      console.log(JSON.stringify(this.mocka, null, 2))
    },
    fetch: function (url) {
      Mock.mock(
        url, {
          'userName': '@name',
          'age|1-100': 100,
          'color': '@color',
          'date': "@date('yyyy-MM-dd')",
          'url': '@url()',
          'content': '@cparagraph()'
        }
      )
      axios.get(url).then((res) => {
        this.cache = res
        console.log(res)
        console.log(JSON.stringify(this.cache, null, 2))
      }).catch((err) => console.log(err))
    },
    getDataO: function () {
      if (this.cache) {
        console.log('cache')
        return Observable.of(this.cache)
      } else {
        console.log('fetch')
        return Observable.fromPromise(this.fetch('http://local2222'))
      }
    },
    testCache: function () {
      this.getDataO().subscribe(data => {
        // 处理数据
        console.log(data)
        console.log(JSON.stringify(this.cache, null, 2))
      })
    }
  },
  created: function () {
    var vm = this
    vm.getUser()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .tw-add-menu
    position absolute
    top 50px
    right 10px
    width 100px
    padding 10px
    background #fff
    border-radius 0 2px 2px 0
    box-shadow 0 2px 11px 0 rgba(0,0,0,.35)
    box-sizing border-box
    text-align center
    .add-menu-item
      width auto
      height 45px
      padding 0 10px
      margin-bottom 2px
      cursor pointer
      border-radius 2px
      display flex
      a
        text-decoration none
        font-size 14px
        color #464c59
      &:hover
        background #1f5c87
        a
         color #fff
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
    z-index 1
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
        a
          color #fff
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
          a
              color #fff
        a
          color #bbdaef
          text-decoration none
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
