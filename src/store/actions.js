import API from '../api'

import {router} from '../router'

import Vue from 'vue';
import { USER_SIGNIN,USER_SIGNOUT,USER_REG } from './types'

import Mock from 'mockjs'
import axios from 'axios'

export const getMsgs = (store) => {
  API.getMsgs().then(data => {
    store.commit('msgList', data.list)
  })
}

export const sendMsg = (store, msg) => {
  store.commit('sendMsg', msg)
}

//注册
export const UserReg = ({ commit }, data) => {
  Mock.mock(
    'http://EasyPM/Api/AddUser', {
      'uid': '@id',
      'username': '@name',
      'date': "@date('yyyy-MM-dd')",
      'success': true
    }
  )
  axios.get('http://EasyPM/Api/AddUser').then(function(response){
    console.log(response)
    console.log(JSON.stringify(response, null, 2))
    if(response.status==200 && response.data!=null){
      if(response.data.success){
        var token={
          uid:response.data.uid,
          userName:response.data.username
        };
        commit('USER_REG', token);
        window.location = '/chooseteam'
        // router.replace('person')
      }else{
        // window.location = '/reg'
        router.push('reg')
      }
    }
  },function(response){
    // console.log(response);
  })
};

//退出
export const UserLogout = ({ commit }, data) => {
  Mock.mock(
    'http://EasyPM/Api/OutUser', {
      'uid': '@id',
      'username': '@name',
      'date': "@date('yyyy-MM-dd')",
      'success': true
    }
  )
  axios.get('http://EasyPM/Api/OutUser').then(function(response){
    if(response.status==200 && response.data!=null){
      if(response.data.success){
        commit('USER_SIGNOUT');
        // window.location = '/login'
        router.replace('login')
      }
    }
  },function(response){
    console.log(response);
  })
};

//登录
export const UserLogin = ({ commit }, data) => {
  Mock.mock(
    'http://EasyPM/Api/UserLogin', {
      'uid': '@id',
      'username': '@name',
      'date': "@date('yyyy-MM-dd')",
      'success': true
    }
  )
  axios.get('http://EasyPM/Api/UserLogin').then(function(response){
    if(response.status==200 && response.data!=null){
      if(response.data.success){
        var token={
          uid:response.data.uid,
          userName:response.data.username
        };
        commit('USER_SIGNIN', token);
        window.location = '/chooseteam'
        // router.replace('person')
      }else{
        // window.location = '/login'
        router.push('login')
      }
    }
  },function(response){
    // console.log(response);
  })
};

// action 会收到 store 作为它的第一个参数
// 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
// 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入
export const incrementCounter = ({commit , state}) => {
  commit('INCREMENT', 1)
};

export const incrementReduce = ({commit , state}) => {
  commit('REDUCE', 1)
};
