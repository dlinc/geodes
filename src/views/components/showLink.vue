<template>
  <ion-page>
    <ion-content class="ion-padding">
            <iframe class="webgl"
                allowfullscreen
                frameborder="0"
                :src="`${webGlPage}`">
            </iframe>
    </ion-content>
  </ion-page>
</template>
 
<script>
import { IonContent} from '@ionic/vue'; //, onIonViewWillEnter } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
//import { ShowOde } from "../components";
import Ode from "../../factories/odeFactory";

//import Geo from "../factories/geoFactory";
// import User from "../factories/userFactory";

//let allLocation = {}
//console.log("GLOBAL Obj ", global,process.env.NODE_ENV)

export default defineComponent({
  name: 'showLink',
  components: {
    IonContent
  },
  setup() {

    const route = useRoute();
    // eslint-disable-next-line no-unused-vars
    const { x1,x2,y1,y2, gleo, id } = route.query;
    let linkMode, webGlPage;
    let odeProps, ode;

    // dev kludge::
    if (gleo) {
      linkMode="gleo"
      if (global,process.env.NODE_ENV ==="development") {
          if (gleo==="1") { webGlPage = "https://scripter.net/lab/alib/showPanorama.html?img=20191117_231638(0).jpg"; }
// webGlPage = "http://localhost:5000/showPanorama.html?img=20191117_231638(0).jpg"; }
          if (gleo==="2") { webGlPage = "https://scripter.net/lab/alib/showPanorama.html?img=20171013_220258.jpeg"; }
         // if (gleo==="2") { webGlPage = "http://localhost:5000/showPanorama.html?img=20171013_220258.jpeg"; }
      } else {
          if (gleo==="1") { webGlPage = "https://scripter.net/lab/alib/showPanorama.html?img=20191117_231638(0).jpg"; }
          if (gleo==="2") { webGlPage = "https://scripter.net/lab/alib/showPanorama.html?img=20171013_220258.jpeg"; }
      }
    }
    //const webGlPage = "http://localhost:8081/firstAframe.html";
    //const webGlPage = "http://localhost:8081/firstGl.html";
    else if (id) {
      linkMode="ode"
      ode = Ode.getOdes(id);
      odeProps = Ode.getOdeProps(ode);
    }
    else {
      linkMode="error"
    }
    //allLocation = getLocDataP()
    //let geo = Geo.getGeo();
    return { x1,x2,y1,y2, gleo, webGlPage,linkMode, odeProps}
},
data(){

  //return allLocation
}
})
</script>

<style scoped>
.webgl {
  width:100%;
  height:100%;
}
</style>