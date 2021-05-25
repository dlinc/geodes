/* eslint-disable  no-mixed-spaces-and-tabs */
<template>
 <ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title class="ion-float-left ion-padding">Geode</ion-title>
            <ion-icon :src="`${iconClose}`" size="large" class="ion-float-right ion-padding" @click.stop="closeModal()" ></ion-icon>
             <ion-icon :src="`${iconShare}`" size="large" class="ion-float-right ion-padding" @click.stop="shareOde( uuid )" ></ion-icon>
            </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-card>
                <ion-card-header>
                    <ion-img :src="`${image}`" v-if = hasImage>
                    </ion-img>
                    <ion-card-subtitle>
                      {{ proximity }} on {{ timestamp }}
                      <ion-label class="ion-float-right ode-byline">&mdash; {{ byline }}</ion-label>
                    </ion-card-subtitle>
                    <ion-card-title>
                      {{ title }}
                      </ion-card-title>
                </ion-card-header>
            <ion-card-content>
                    <div v-if = hasVideo class="show-video">
                        <video controls autoplay crossorigin = "use-credentials" autoPictureInPicture :poster="`${videoPoster}`">
                            <source :src="`${video}`" type="video/mp4">
                            <source :src="`${video}`" type="video/webm">
                            <source :src="`${video}`" type="video/ogg">
                            <track v-if = hasVideoCaptions kind="subtitles" :src="`${videoSubtitles}`" :srclang="`${videoLang}`" :label="`${ videoLangLabel}`">
                               This browser does not support inline video. Try the original <a href="{{ video }}" target=_blank >link </a>.
                        </video></div>
                    <pre v-if = hasBody>{{ body }}</pre>
                    <div v-if = hasAudio>
                        <audio controls autoplay crossorigin xloop>
                            <source :src="`${audio}`" type='audio/mp3'>
                                Please upgrade your browser &mdash; this one does not support inline audio.
                            </audio>
                    </div>
            </ion-card-content>
        </ion-card>
    </ion-content>
</ion-page>
</template>
<script>
import { IonContent, IonImg, IonIcon, IonHeader, IonTitle, IonLabel, IonToolbar, IonPage,IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader,modalController } from '@ionic/vue';
import { defineComponent } from 'vue';
import Odes from "../../factories/odeFactory"

const dbug = process.env.VUE_APP_DEBUG;

export default defineComponent({
  components: { IonContent, IonImg, IonIcon, IonHeader, IonTitle, IonLabel, IonToolbar, IonPage,IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader },
  name: 'showOde',
  props: {
    title: { type: String, default: 'Default Title' },
    body: { type: String, default: 'Default Body' },
    proximity: { type: String, default: null },
    timestamp: { type: String, default: 'No timestamp' },
    byline: { type: String, default: 'Default byline' },
    id: { type: String, default: null },
    uid: { type: String, default: null },
    uuid: { type: String, default: null },
    icon: { type: String, default: null },
    image: { type: String, default: null },
    audio: { type: String, default: null },
    video: { type: String, default: null },
    videoPoster: { type: String, default: null },
    videoSubtitles: { type: String, default: null },
    videoLang: { type: String, default: 'en' },
    videoLangLabel: { type: String, default: 'English' },
    hasImage: { type: Boolean, default: false },
    hasBody: { type: Boolean, default: false },
    hasAudio: { type: Boolean, default: false },
    hasVideo: { type: Boolean, default: false },
    hasVideoCaptions: { type: Boolean, default: false },
  },
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
      XshowStreet(id){
        /* this function is retired */
        if (this.dbug) { console.log("Show street ",id) }
        Odes.streetModal(id);
        },
      shareOde(uid){
        if (this.dbug) { console.log("Share ode ",uid) }
        //window.location=process.env.BASE_URL+'?uid='+uid;
        //Odes.streetModal(id);
        },
  },
});
</script>

<style scoped>
.show-video{
  width:100%;
  height:auto;
  color:royalblue;
}
.ode-byline {
  font-size: normal;
}
</style>