import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
// import actions from './actions'
import wsPlugin from './wsPlugin'

import * as actions from './actions'
import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msgList: []
  },
  mutations,
  actions,
  getters: {
    msgList (state) {
      return state.msgList
    },
    getCount (state) {
      return state.count
    },
    UserInfo (state) {
      return state.login.token
    }
  },
  modules: {
    login
  },
  plugins: [wsPlugin()]

})

// 创建一个对象来保存应用启动时的初始状态
/*const state = {
 // TODO: 放置初始状态
 //应用启动时，count设置为0
 count: 0
 }*/

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
/*const mutations = {
 // TODO: 放置我们的状态变更函数
 // mutation 的第一个参数是当前的 state
 // 你可以在函数里修改 state
 INCREMENT(state, amount) {
 state.count = state.count + amount
 },
 REDUCE(state,amount){
 state.count = state.count - amount
 }
 }*/


// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中


