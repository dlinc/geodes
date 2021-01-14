import { createRouter, createWebHistory } from '@ionic/vue-router';
//import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Tabs from '../views/Tabs.vue'
import Speakers from '../views/speakers.vue'
import Schedule from '../views/schedule.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: Tabs
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: Speakers
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
