<template>
 <ion-page>
    <ion-header>
        <ion-toolbar>
        <ion-title class="ion-float-left ion-padding">Location</ion-title>
        <ion-icon :src="`${iconClose}`" size="large" class="ion-float-right ion-padding" @click.stop="closeModal()" ></ion-icon>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-card class="ion-padding">

                    <ion-img :src="`${image}`" v-if = hasImage></ion-img>
                    <ion-card-subtitle>On {{ timestamp }}</ion-card-subtitle>
                    <ion-item><ion-label class="ion-padding">Latitude: {{ latitude }}</ion-label></ion-item>
                    <ion-item><ion-label class="ion-padding">Longitude: {{ longitude }}</ion-label></ion-item>
                    <ion-item><ion-label class="ion-padding">Accuracy: {{ accuracy }} m</ion-label></ion-item>
                    <ion-item><ion-label class="ion-padding">Altitude: {{ altitude }}</ion-label></ion-item>
                    <ion-item><ion-label class="ion-padding">Heading: {{ heading }}</ion-label></ion-item>
                    <ion-item><ion-label class="ion-padding">Speed: {{ speed }}</ion-label></ion-item>

        </ion-card>
    </ion-content>
</ion-page>
</template>
<script>
import { IonContent, IonImg, IonLabel, IonIcon, IonItem, IonHeader, IonTitle, IonToolbar, IonPage,IonCard, IonCardSubtitle, modalController } from '@ionic/vue';
import { defineComponent } from 'vue';
//import Geo from "../../factories/geoFactory"

export default defineComponent({
  components: { IonContent, IonImg, IonLabel, IonIcon, IonItem, IonHeader, IonTitle, IonToolbar, IonPage,IonCard, IonCardSubtitle },
  name: 'showLocation',
  props: {
    latitude: { type: String, default: ' - '  },
    longitude: { type: String, default: ' - '  },
    timestamp: { type: String, default: ' - ' },
    accuracy: { type: String, default: ' - ' },
    altitude: { type: String, default: ' - '  },
    heading: { type: String, default: ' - '  },
    speed: { type: String, default: ' - ' },
    image: { type: String, default: null },
    hasImage: { type: Boolean, default: false },
  },

  /*data(data) {
    const baseUrl = process.env.BASE_URL;
    if (this.dbug) { console.log("DATA location modal wi data ",data, baseUrl, global) }
    return {
        data
    }
  },*/
  setup(){
      const iconClose = process.env.BASE_URL +'assets/icon/icon-close-outline.svg';
      if (process.env.dbug) { console.log("SETUP modal ", iconClose) }
      return { iconClose }
  },
  methods: {

      async closeModal(){
          //if (this.dbug) { console.log("Close modal", this) }
          //Geo.toggleModal()
          await modalController.dismiss();
      }
  }
});
</script>