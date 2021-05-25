import { createRouter, createWebHistory } from '@ionic/vue-router';
//import { RouteRecordRaw } from 'vue-router';
import Map from '../views/map.vue'
import List from '../views/list.vue'
import Add from '../views/add.vue'
import Geode from "../views/geode.vue"
import Show from "../views/components/showLink"
import Geo from "../factories/geoFactory"
import Welcome from "../views/welcome"

const routes = [
  {
    path: '/',
    name: 'show',
    component: Show,
    props: route => ({ 
      lat1: route.query.x1,
      lat2: route.query.x2,
      lon1: route.query.y1,
      lon2: route.query.y2,
      gleo: route.query.gleo,
      id: route.query.id,
     }),
     beforeEnter: (url, from) => {
      // check before navigating
      console.log("Routing base /  ",url,from)
      let status= (url.query.id || url.query.gleo ? true : false)
      if (!status){
        return { path: '/welcome' }
      }
    },
  },
  {
    name: 'refresh',
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
    component: List,
    beforeEnter: (to, from) => {
      // check before navigating
      let status=Geo.getGeo().status 
      if (status!== "found"){
        console.log("list not ready: ",to,from)
        //redirect: '/',
        console.log("Geo not ready. List later.")
        return { path: '/welcome' } //,false
      }
    }
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/map',
    name: 'Map',
    component: Map,
    beforeEnter: (to, from) => {
      // check before navigating
      let status=Geo.getGeo().status 
      if (status!== "found"){
        console.log("map not ready: ",to,from)
        //redirect: '/',
        console.log("Geo not ready. Map later.")
        return { path: '/welcome' } //,false
      }
    },
  },
  {
    path: '/:id',
    name: 'Geode',
    component: Geode
  },
  {
    path: '/?id=550',
    name: 'test',
    component: Show,
    props: route => ({ 
      id: route.query.id,
     }),
     beforeEnter: (url, from) => {
      // check before navigating
      console.log("Routing base /  ",url,from)
     },
  }
]




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
//console.log("HERE IS THEE ROUTER obj ", router, global)
/* 
something like this to set the headers:
if (process.env.NODE_ENV === "development") {
  router.options("*", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token")
    return res.send({})
  })
}
*/

export default router
