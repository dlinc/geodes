import { createRouter, createWebHistory } from '@ionic/vue-router';
//import { RouteRecordRaw } from 'vue-router';
import Map from '../views/map.vue'
//import Tabs from '../views/tabs.vue'
import List from '../views/list.vue'
import Add from '../views/add.vue'

const routes = [
  {
    path: '/',
    name: 'Mao',
    component: Map
  },
  {
    path: '/refresh',
    redirect: '/',
    comment: 'for legacy only?'
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/list',
    name: 'List',
    component: List
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
