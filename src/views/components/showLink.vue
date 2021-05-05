<template>
    <ion-content class="ion-padding">
        <ion-header>
        <ion-title class="ion-float-left ion-padding">Title here</ion-title>
        </ion-header>
            <iframe class="webgl"
                allowfullscreen
                frameborder="0"
                :src="`${webGlPage}`">
            </iframe>
    </ion-content>
</template>

<script>
import { IonContent, IonHeader,  IonTitle } from '@ionic/vue'; //, onIonViewWillEnter } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
//import Geo from "../factories/geoFactory";
// import User from "../factories/userFactory";

//let allLocation = {}
console.log("GLOBAL Obj ", global,process.env.NODE_ENV)

export default defineComponent({
  name: 'showLink',
  components: {
    IonContent,IonHeader, IonTitle
  },
  setup() {

    const route = useRoute();
    // eslint-disable-next-line no-unused-vars
    const { x1,x2,y1,y2, gleo } = route.query;
    let webGlPage;

    // dev kludge::
    if (gleo) {
      if (global,process.env.NODE_ENV ==="development") {
          if (gleo==="1") { webGlPage = "http://localhost:8081/showPanorama.html?img=20191117_231638(0).jpg"; }
          if (gleo==="2") { webGlPage = "http://localhost:8081/showPanorama.html?img=20171013_220258.jpeg"; }
      } else {
          if (gleo==="1") { webGlPage = "https://scripter.net/lab/alib/showPanorama.html?img=20191117_231638(0).jpg"; }
          if (gleo==="2") { webGlPage = "https://scripter.net/lab/alib/showPanorama.html?img=20171013_220258.jpeg"; }
      }
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
  width:100%;
  height:90%;
}
</style>