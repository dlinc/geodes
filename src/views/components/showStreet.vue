<template>
 <ion-page>
    <ion-header>
        <ion-toolbar>
        <ion-title class="ion-float-left ion-padding">Street</ion-title>
        <ion-icon :src="`${iconClose}`" size="large" class="ion-float-right ion-padding" @click.stop="closeModal()" ></ion-icon>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-card>
                <ion-card-header>
                    <ion-card-subtitle>Accurate to {{ geo.here.accuracy }} m</ion-card-subtitle>
                    <ion-card-title>{{ title }}</ion-card-title>
                </ion-card-header>
            <ion-card-content>
                <div id="street-view" class="street-div">Oops, the street view is not defined yet.</div>
            </ion-card-content>
        </ion-card>
    </ion-content>
</ion-page>
</template>
<script>
import { IonContent, IonIcon, IonHeader, IonTitle, IonToolbar, IonPage,IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, modalController } from '@ionic/vue';
import { defineComponent } from 'vue';
import Geo from "../../factories/geoFactory"
import Odes from "../../factories/odeFactory"
//import { myMap } from "../map"

const dbug = process.env.VUE_APP_DEBUG;
// eslint-disable-next-line no-unused-vars
let publicPath = process.env.BASE_URL;
// eslint-disable-next-line no-unused-vars
let panorama;
// eslint-disable-next-line no-unused-vars
let smarker;

export default defineComponent({
  components: { IonContent, IonIcon,  IonHeader, IonTitle, IonToolbar, IonPage,IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle,IonCardContent },
  name: 'showStreet',
  props: {
    title: { type: String, default: 'Default Title' },
    body: { type: String, default: 'Default Body' },
    proximity: { type: String, default: null },
    timestamp: { type: String, default: 'No timestamp' },
    byline: { type: String, default: 'Default byline' },
    icon: { type: String, default: null },
    id: { type: String, default: null },
    lat: { type: String, default: null },
    audio: { type: String, default: null },
    video: { type: String, default: null },
    hasImage: { type: Boolean, default: false },
    hasBody: { type: Boolean, default: false },
    hasAudio: { type: Boolean, default: false },
    hasVideo: { type: Boolean, default: false },
  },

  /*data(data) {
    const baseUrl = process.env.BASE_URL;
    if (this.dbug) { console.log("DATA location modal wi data ",data, baseUrl, global) }
    return {
        data
    }
  },*/
  setup(id){
      const iconClose = process.env.BASE_URL +'assets/icon/icon-close-outline.svg';

      const geo = Geo.getGeo();



      if (dbug) { console.log("SETUP street modal ", id) }
      //this.initView()
      return { iconClose, geo }
  },
  mounted (){

    this.initView(this.id)
  },

  methods: {

      async closeModal(){
          if (this.dbug) { console.log("before Close modal", panorama, smarker) }
          //Geo.toggleModal()
          //document.getElementById("street-view").innerHTML="Oops, the street view is not defined yet."
          //mod.value = "Oops, the street view is not defined yet."
          panorama = null;
          smarker = null;
          if (this.dbug) { console.log("Close modal", panorama, smarker) }
          await modalController.dismiss();
      },

      initView(id){
          if (dbug) { console.log("Running init View on ", id, publicPath) }
          // eslint-disable-next-line no-unused-vars
          const thisOde = Odes.getOneOde(id)
          const pos = { lat: Number(thisOde.lat), lng: Number(thisOde.lon) }
          const povDefault = { heading: 0, pitch: 0 }
          //let panorama;
          
          // eslint-disable-next-line no-undef
          const panorama = new google.maps.StreetViewPanorama(
                document.getElementById("street-view"),
                {
                position: pos ,
                pov: povDefault,
                zoom: 1,
                addressControl: false,
                visible:true,
                }
            );
             // eslint-disable-next-line no-undef
            const smarker = new google.maps.Marker({
              position: thisOde.position,
              label: thisOde.title,
              title: thisOde.title,
              icon: thisOde.userIcon,
              pov: povDefault,
              visible: true,
              });
            smarker.addListener("click", () => {
              console.log("Clicked smarker")
            });
            panorama.setVisible(true)
            smarker.setMap(panorama)
            //smarker.setZIndex(10000)
            setTimeout(() => {  
              console.log("setting marker to visible")
              smarker.setVisible(true) }, 500);
            
            let gind = smarker.getZIndex();
            console.log("pre parker gindex =", gind, smarker.MAX_ZINDEX)

           //return this.panorama;
     }
  }
});
</script>

<style scoped>
.street-div{
  width:100%;
  height:500px;
  color:royalblue;
}
</style>