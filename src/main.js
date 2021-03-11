import { createApp,defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router';
//import { config } from '../vue.config';

import { IonicVue } from '@ionic/vue';
import VueGoogleMaps from '@fawmi/vue-google-maps'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Site styling */
import './theme/site.css';

/* start up */
const AsyncComp = defineAsyncComponent(() =>
   import('./views/components/spinner.vue')
  )
  
const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
        key: process.env.VUE_APP_MAPS_API_KEY,
    },
    });

app.component('async-component', AsyncComp); 

app.config.globalProperties.dbug = (process.env.VUE_APP_DEBUG ? Boolean(process.env.VUE_APP_DEBUG) : false);
app.config.globalProperties.stack = ['a','b','c'];

// global error handler
app.config.errorHandler = (err, vm, info) => {
  // handle error
  // `info` is a Vue-specific error info, e.g. which lifecycle hook
  // the error was found in
  console.log("ERROR Occurred (err, vm, info) -",err, vm, info)
}

if (app.config.globalProperties.dbug===true){
  console.log("APP Config - ", app.config, process.env)
}

router.isReady().then(() => {
  //console.log("All vars =",process.env)
  //console.log("All options =", publicPath, outputDir)
  app.mount('#app');
});
