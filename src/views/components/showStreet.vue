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
                    <ion-img :src="`${image}`" v-if = hasImage></ion-img>
                    <ion-icon ></ion-icon>
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
import { IonContent, IonImg, IonIcon, IonHeader, IonTitle, IonToolbar, IonPage,IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, modalController } from '@ionic/vue';
import { defineComponent } from 'vue';
import Geo from "../../factories/geoFactory"
import Odes from "../../factories/odeFactory"

const dbug = process.env.VUE_APP_DEBUG;

export default defineComponent({
  components: { IonContent, IonImg,  IonIcon,  IonHeader, IonTitle, IonToolbar, IonPage,IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle,IonCardContent },
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
          //if (this.dbug) { console.log("Close modal", this) }
          //Geo.toggleModal()
          await modalController.dismiss();
      },

      initView(id){
          if (dbug) { console.log("Running init View on ", id) }
          // eslint-disable-next-line no-unused-vars
          const thisOde = Odes.getOneOde(id)
          const pos = { lat: Number(thisOde.lat), lng: Number(thisOde.lon) }
          let panorama;
          
          // eslint-disable-next-line no-undef
          panorama = new google.maps.StreetViewPanorama(
                document.getElementById("street-view"),
                {
                position: pos ,
                pov: { heading: 45, pitch: 0 },
                zoom: 1,
                }
            );
             // eslint-disable-next-line no-undef
            new google.maps.Marker({
            position: pos,
            panorama,
            title: "Hello World!",
            });
            return panorama;
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