import { createRouter, createWebHistory } from '@ionic/vue-router';
//import { RouteRecordRaw } from 'vue-router';
import Map from '../views/map.vue'
//import Tabs from '../views/tabs.vue'
import List from '../views/list.vue'
import Add from '../views/add.vue'
import Geode from "../views/geode.vue"
import Zone from "../views/zone.vue"
import Geo from "../factories/geoFactory"

const routes = [
  {
    path: '/',
    component: Zone,
    props: route => ({ 
      lat1: route.query.x1,
      lat2: route.query.x2,
      lon1: route.query.y1,
      lon2: route.query.y2,
      uid: route.query.uid,
     })
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
    component: Map,
    beforeEnter: (to, from) => {
      // check before navigating
      let status=Geo.getGeo().status 
      if (status!== "found"){
        console.log("map not ready route: ",to,from)
        //redirect: '/',
        console.log("Geo not ready. Try in a second")
        return { path: '/' } //,false
      }
    },
  },
  {
    path: '/zone',
    name: 'Zone',
    component: Zone
  },
  {
    path: '/:id',
    name: 'Geode',
    component: Geode
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
