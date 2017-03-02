import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import main from '@/components/main'
import tasks from '@/components/tasks'
import people from '@/components/people'
import chat from '@/components/chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: main
    },
    {
      path: '/tasks',
      component: tasks
    },
    {
      path: '/people',
      component: people
    },
    {
      path: '/chat',
      component: chat
    }
  ]
})
