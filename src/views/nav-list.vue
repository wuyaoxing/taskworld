<template>
  <div>
    <div>
            <span v-show="isLogin()">欢迎您，<router-link to="/person">{{!!user?user.userName:''}}</router-link>&nbsp;
                [<a href="javascript:void(0);" @click="userLogout()">退出</a>]</span>
      <router-link to="/login" v-show="!isLogin()">登录</router-link>
      <router-link to="/reg" v-show="!isLogin()">注册</router-link>
    </div>
    <div>
      <router-link to="/home">首页</router-link>
      <router-link to="/person">个人中心</router-link>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    data (){
      return {
        user: {}
      }
    },
    computed: mapGetters(
      ['UserInfo']
    ),
    methods: mapActions([
      'UserLogout',
    ]),
    methods:{
      isLogin(){
        var vm = this;
        return vm.UserInfo;
      },
      getUser(){
        var vm =this;
        vm.user=vm.UserInfo;
      },
      userLogout(){
        var vm = this;
        vm.$store.dispatch('UserLogout', vm.user);
      }
    },
    created:function(){
      var vm=this;
      vm.getUser();
    }
  }
</script>
