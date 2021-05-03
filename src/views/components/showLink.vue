<template>
  <ion-page>
    <ion-content class="ion-padding" :fullscreen="true">
        <ion-header>
        <ion-title class="ion-float-left ion-padding">Title here</ion-title>
        </ion-header>
            <iframe class="webgl"
                allowfullscreen
                frameborder="0"
                :src="`${webGlPage}`">
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

    const route = useRoute();
    // eslint-disable-next-line no-unused-vars
    const { x1,x2,y1,y2, gleo } = route.query;
    let webGlPage;
    if (gleo) {
      if (gleo==="1") { webGlPage = "http://localhost:8081/showPanorama.html?img=20191117_231638(0).jpg"; }
      if (gleo==="2") { webGlPage = "http://localhost:8081/showPanorama.html?img=20171013_220258.jpeg"; }
    }
    //const webGlPage = "http://localhost:8081/firstAframe.html";
    //const webGlPage = "http://localhost:8081/firstGl.html";
    

    //allLocation = getLocDataP()
    //let geo = Geo.getGeo();
    return { x1,x2,y1,y2, gleo, webGlPage }
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
  height:90%;
}
</style>