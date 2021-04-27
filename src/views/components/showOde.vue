/* eslint-disable  no-mixed-spaces-and-tabs */
<template>
 <ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title class="ion-float-left ion-padding">Geode</ion-title>
            <ion-icon :src="`${iconClose}`" size="large" class="ion-float-right ion-padding" @click.stop="closeModal()" ></ion-icon>
            <ion-icon :src="`${iconStreet}`" size="large" class="ion-float-right ion-padding" @click.stop="showStreet( id )" ></ion-icon>
            <ion-icon :src="`${iconShare}`" size="large" class="ion-float-right ion-padding" @click.stop="shareOde( uid )" ></ion-icon>
            </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-card>
                <ion-card-header>
                    <ion-img :src="`${image}`" v-if = hasImage></ion-img>
                    <ion-icon ></ion-icon>
                    <ion-card-subtitle>{{ proximity }} on {{ timestamp }}</ion-card-subtitle>
                    <ion-card-title>{{ title }}</ion-card-title>
                </ion-card-header>
            <ion-card-content>
                    <div v-if = hasVideo> {{ video }}
                        <video controls xautoplay crossorigin = "use-credentials" width="100%" xautoPictureInPicture>
                            <source :src="`${video}`">
                               This browser does not support inline video. Try the original link <a href=" {{video}} " target=_blank >{{ video}} </a>.
                            </video></div>
                    <pre v-if = hasBody>{{ body }}</pre>
                    <div v-if = hasAudio>
                        <audio controls autoplay xloop>
                            <source :src="`${audio}`" type='audio/mp3'>
                                Please upgrade your browser &mdash; this one does not support inline audio.
                            </audio></div>
            </ion-card-content>
        </ion-card>
    </ion-content>
</ion-page>
</template>
<script>
import { IonContent, IonImg, IonIcon, IonHeader, IonTitle, IonToolbar, IonPage,IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader,modalController } from '@ionic/vue';
import { defineComponent } from 'vue';
import Odes from "../../factories/odeFactory"

const dbug = process.env.VUE_APP_DEBUG;

export default defineComponent({
  components: { IonContent, IonImg, IonIcon, IonHeader, IonTitle, IonToolbar, IonPage,IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader },
  name: 'showOde',
  props: {
    title: { type: String, default: 'Default Title' },
    body: { type: String, default: 'Default Body' },
    proximity: { type: String, default: null },
    timestamp: { type: String, default: 'No timestamp' },
    byline: { type: String, default: 'Default byline' },
    id: { type: String, default: null },
    uid: { type: String, default: null },
    icon: { type: String, default: null },
    image: { type: String, default: null },
    audio: { type: String, default: null },
    video: { type: String, default: null },
    hasImage: { type: Boolean, default: false },
    hasBody: { type: Boolean, default: false },
    hasAudio: { type: Boolean, default: false },
    hasVideo: { type: Boolean, default: false },
  },
  //data(data) {
    //if (this.dbug) { console.log("running modal wi data ",data) }
   // return {
    //    data
    //}
  //},
  setup(){

      const iconClose = process.env.BASE_URL +'assets/icon/icon-close-outline.svg';
      const iconStreet = process.env.BASE_URL +'assets/icon/icon-walk-outline.svg';
      const iconShare = process.env.BASE_URL +'assets/icon/icon-share-outline.svg';

      if (dbug) { console.log("running showOde modal ") }
      return { iconClose, iconStreet, iconShare }
  },
  methods: {

      async closeModal(){
          //if (this.dbug) { console.log("Close modal", this) }
          await modalController.dismiss();
      },
      showStreet(id){
        if (this.dbug) { console.log("Show street ",id) }
        Odes.streetModal(id);
        },
      shareOde(uid){
        if (this.dbug) { console.log("Share ode ",uid) }
        window.location=process.env.BASE_URL+'?uid='+uid;
        //Odes.streetModal(id);
        }
  }
});
</script>