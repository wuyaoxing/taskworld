<template>
  <div>
    <div class=""><router-link to="/">首页</router-link></div>
    <h2>登录</h2>
    <div>用户名：<input v-model="user.name" type="text"/></div>
    <div>密码：<input v-model="user.password" type="password"/></div>
    <div><button @click="userLogin()">登录</button></div>
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
          postType:'UserLogin',
          name: '',
          password: '',
          password_r: ''
        }
      }
    },
    methods: mapActions([
      'UserLogin',
    ]),
    methods:{
      userLogin(){
        const abc = {"portalMode": "grid", "libraryMode": "list", "memberBarMode": "full", "inboxSortMode": "updated", "hideDoneTasks": 0, "postMode": "html", "quickCreateTask": true, "quickReply": true, "tips": {"workspaceSwitchGuideTip": true, "workspaceOnboardingFinished": true, "isKnownProOverdue": true, "onboardingFinished": true}, "_userId": "58ba63c9b0ee69eb32d6e07e", "_id": "58ba63cb457b79d6318ca2a0", "language": "zh", "notification": {"monthly": {"email":true}, "daily": {"email":true}, "update": {"email": false, "mobile": true}, "involve": {"email": false, "mobile": true}, "newevent": {"email": false, "mobile": true}, "newwork": {"email": false, "mobile": true}, "newtask": {"email": false, "mobile": true}, "newpost": {"email": false, "mobile": true}, "comment": {"email": false, "mobile": true}}, "emails": {"monthly": true, "newFeature": true, "organizationReport": true, "daily": true, "notification": true}, "notifications": {"objectlink": true, "update": true, "basic": true}, "lastWorkspace": "personal", "lastOrgId": null, "openWindowMode": "window", "hasNew": true, "switcherOn": false, "isUsePanel": false, "selections": {}, "tasklist": {}}
        console.log(JSON.stringify(abc, null, 2))
        var vm = this
        vm.$store.dispatch('UserLogin', vm.user)
      }
    }
  }
</script>
