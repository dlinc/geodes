import { createRouter, createWebHistory } from '@ionic/vue-router';
//import { RouteRecordRaw } from 'vue-router';
import Map from '../views/map.vue'
//import Tabs from '../views/tabs.vue'
import List from '../views/list.vue'
import Add from '../views/add.vue'
import Geode from "../views/geode.vue"

const routes = [
  {
    path: '/',
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
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/:id',
    name: 'Geode',
    component: Geode
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
