<template>
  <div>
    <h2>注册</h2>
    <div>用户名：<input v-model="user.name" type="text"/></div>
    <div>密码：<input v-model="user.password" type="password"/></div>
    <div>确认密码：<input v-model="user.password_r" type="password"/></div>
    <div><button @click="reg()">注册</button></div>
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
        user: {
          postType:'AddUser',
          name: '',
          password: '',
          password_r: ''
        }
      }
    },
    methods: mapActions([
      'UserReg',
    ]),
    methods:{
      reg(){
        var vm = this;
        vm.$store.dispatch('UserReg', vm.user);
      }
    }
  }
</script>
