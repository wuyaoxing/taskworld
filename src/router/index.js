import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import header from '@/components/header'
import sidebar from '@/components/sidebar'
import main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'taskworld',
      components: {
        header: header,
        sidebar: sidebar,
        main: main
      }
    }
  ]
})
