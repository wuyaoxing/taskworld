import Vue from 'vue'
import Router from 'vue-router'

import store from '../store/index'

Vue.use(Router)
import routes from './routerData.js'

export const router =  new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes
  // routes: [
  //   {
  //     path: '/',
  //     name: 'index',
  //     component: Home
  //   },
  //   {
  //     path : '/reg',
  //     component : Reg,
  //     meta: { auth: false }
  //   },
  //   {
  //     path : '/login',
  //     component : Login
  //   },
  //   {
  //     path : '/person',
  //     component : Person
  //     // beforeEnter: ({meta, path}, from, next) => {
  //     //   var { auth = true } = meta
  //     //   var isLogin = Boolean(store.state.login.token) //true用户已登录， false用户未登录
  //     //
  //     //   if(isLogin == false && path == '/person'){
  //     //     return next({ path: '/login' })
  //     //   }
  //     //   next()
  //     // }
  //   },
  //
  //   {
  //     path: '/project',
  //     component: main
  //     // beforeEnter: (to, from, next) => {
  //     //   const isLogin = Boolean(store.state.login.token) //true用户已登录， false用户未登录
  //     //   console.log(isLogin)
  //     //   if(!isLogin){
  //     //     return next({ path: '/login' })
  //     //   }
  //     //   next()
  //     // }
  //   },
  //   {
  //     path: '/tasks',
  //     component: tasks
  //   },
  //   {
  //     path: '/people',
  //     component: people
  //   },
  //   {
  //     path: '/chat',
  //     redirect: '/chat/ca',
  //     component: chat,
  //     children: [
  //       {
  //         path: 'ca',
  //         component: ca
  //       },
  //       {
  //         path: 'cb',
  //         component: cb
  //       }
  //     ]
  //   },
  //   {
  //     path: '/calendar',
  //     component: calendar
  //   },
  //   {
  //     path: '/calendar1',
  //     component: calendar1
  //   },
  //   {
  //     path : '*',
  //     component : Home
  //   }
  // ]
})
router.beforeEach(({meta, path}, from, next) => {

  const {auth = true} = meta      // meta代表的是to中的meta对象，path代表的是to中的path对象

  var isLogin = Boolean(store.state.login.token)    // true用户已登录， false用户未登录　

  if (auth  &&  !isLogin  &&  path !== '/login') {   // auth 代表需要通过用户身份验证，默认为true，代表需要被验证， false为不用检验
    // console.log($route.name)
    return next({ path: '/login' })   //  跳转到login页面
  }
  next()   // 进行下一个钩子函数
})
