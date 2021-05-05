<template>
  <ion-app>
     <Header :loggedIn= signedIn />
    <ion-router-outlet />
    <Tabs :loggedIn= signedIn />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Tabs from './views/tabs.vue';
import Header from './views/header.vue';
import User from "./factories/userFactory"
// import { publicPath } from  'vue.config';
//console.log("Public Path =", publicPath)

const dbug = process.env.VUE_APP_DEBUG;
let loggedIn = User.loggedIn()
export default defineComponent({
  name: 'App',
 props: {
    loggedIn: { type: Boolean, default: false },
  },
  setup(){
      if (dbug) { console.log("running APP.VUE wi logged in of ", loggedIn) }
      return { signedIn: loggedIn }
  },
  components: {
    IonApp,
    IonRouterOutlet,
    Tabs,
    Header
  }
});
</script>