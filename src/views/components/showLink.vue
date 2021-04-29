<template>
  <ion-page>
    <ion-content class="ion-padding" :fullscreen="true">
        <ion-header>
        <ion-title class="ion-float-left ion-padding">Title here</ion-title>
        </ion-header>

            <iframe class="webgl"
                allowfullscreen
                frameborder="0"
                src="http://localhost:8081/firstGl.html">
            </iframe>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonHeader,  IonTitle } from '@ionic/vue'; //, onIonViewWillEnter } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
//import Geo from "../factories/geoFactory";
// import User from "../factories/userFactory";

//let allLocation = {}


export default defineComponent({
  name: 'showLink',
  components: {
    IonContent,IonPage,IonHeader, IonTitle
  },
  setup() {
/*
     onIonViewWillEnter(() => {
      allLocation = getLocData()
      console.log('page did enter', allLocation);
      return allLocation
    });*/

    const route = useRoute();
    // eslint-disable-next-line no-unused-vars
    const { x1,x2,y1,y2, gleo } = route.query;
    console.log("Params in -", route.query,x1,x2,y1,y2, gleo );
    //allLocation = getLocData()
    //let geo = Geo.getGeo();
    return { x1,x2,y1,y2, gleo }
},
data(){

  //return allLocation
}
})
</script>

<style scoped>
.webgl {
  xborder:1px red solid;
  width:100%;
  height:100%;
}
</style>