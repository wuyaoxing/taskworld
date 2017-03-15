// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import fullCalendar from 'vue-fullcalendar'

import store from './store'

import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'

import http from 'axios'

Vue.use(VueRx, Rx, http)

// export default new Vue({
//     el: '#app',
//     router,
//     store,
//     render: h => h(App)
// })

Vue.component('full-calendar', fullCalendar)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// router.beforeEach((to, from, next) => {
//   const isLogin = Boolean(store.state.login.token)
//
//   if (!isLogin && !$route.meta.auth) {
//     console.log(isLogin)
//     next({ path: '/login' })
//   } else {
//     console.log(isLogin)
//     next()
//   }
// })
