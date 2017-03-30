/**
 * 功能:
 *
 * @author: wuyaoxing(82565097@qq.com)
 * @create: 2017-03-29 17:29:08
 * @version: 2017 version 1.0
 * @company: 创海科技 Created with IntelliJ IDEA
 */

import project from '@/views/project/main.vue'
import overview from '@/views/overview/overview.vue'
import people from '@/views/people/people.vue'

import chat from '@/components/chat/chat.vue'
import ca from '@/components/chat/a.vue'
import cb from '@/components/chat/b.vue'

import calendar from '@/views/calendar/calendar.vue'
import scrollCalendar from '@/views/calendar/index.vue'

import Home from '../views/home/home.vue'
import chooseteam from '../views/team/index.vue'
import Reg from '../views/register/register.vue'
import Person from '../views/person/person.vue'
import Login from '../views/login/login.vue'
import Index from '../views/index.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { auth: false }
  },
  {
    path : '/reg',
    component : Reg,
    meta: { auth: false }
  },
  {
    path : '/login',
    component : Login
  },
  {
    path : '/chooseteam',
    component : chooseteam
  },
  {
    name: 'team',
    path: '/:user',
    component: Index,
    children: [
      {
        path: 'overview',
        component: overview,
        text: '概览'
      },
      {
        path: 'project',
        component: project,
        text: '项目'
      },
      {
        path: 'people',
        component: people,
        text: '成员'
      },
      {
        path: 'chat',
        redirect: 'chat/ca',
        component: chat,
        text: '聊天',
        children: [
          {
            path: 'ca',
            component: ca,
            text: 'Rx'
          },
          {
            path: 'cb',
            component: cb,
            text: 'vuex'
          }
        ]
      },
      {
        path: 'calendar',
        component: calendar,
        text: '日历'
      },
      {
        path: 'scrollCalendar',
        component: scrollCalendar,
        text: '日历'
      },
      {
        path : 'person',
        component : Person,
        text: '我的'
      }
    ]
  },
  {
    path : '*',
    component : Home
  }
  ]
