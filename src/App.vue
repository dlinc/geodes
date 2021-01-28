<template>
  <ion-app>
        <Header />
    <ion-router-outlet />

    <Tabs />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Tabs from './views/tabs.vue';
import Header from './views/header.vue';
// import { publicPath } from  'vue.config';
//console.log("Public Path =", publicPath)

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Tabs,
    Header
  }
});
</script>