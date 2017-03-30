<template>
  <div>
    <h2>首页</h2>
    <h3>欢迎您!</h3>
    <span v-show="isLogin()">欢迎您，<router-link to="/person">{{!!user?user.userName:''}}</router-link></span>
    <router-link v-if="!isLogin()" to="/login">登录</router-link>
    <router-link v-if="!isLogin()" to="/reg">注册</router-link>
    <router-link v-if="isLogin()" to="/person">个人中心</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    name: 'home',
    data () {
      return {
        user: {}
      }
    },computed: {
      ...mapGetters([
        'UserInfo'
      ])
    },
    methods: {
      ...mapActions([
        'UserLogout'
      ]),
      isLogin () {
        var vm = this
        return vm.UserInfo
      },
      getUser () {
        var vm = this
        vm.user = vm.UserInfo
      }
    },
    created: function () {
      var vm = this
      vm.getUser()
    }
  }
</script>
