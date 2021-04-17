<template>
 <ion-page>
    <ion-header>
        <ion-toolbar>
        <ion-title class="ion-float-left ion-padding">Geode</ion-title>
        <ion-icon :src="`${iconClose}`" size="large" class="ion-float-right ion-padding" @click.stop="closeModal()" ></ion-icon>
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
            <pre>{{ body }}</pre>
            </ion-card-content>
        </ion-card>
    </ion-content>
</ion-page>
</template>
<script>
import { IonContent, IonImg, IonIcon, IonHeader, IonTitle, IonToolbar, IonPage,IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader,modalController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent, IonImg, IonIcon, IonHeader, IonTitle, IonToolbar, IonPage,IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader },
  name: 'showCard',
  props: {
    title: { type: String, default: 'Default Title' },
    body: { type: String, default: 'Default Body' },
    proximity: { type: String, default: null },
    timestamp: { type: String, default: 'No timestamp' },
    byline: { type: String, default: 'Default byline' },
    icon: { type: String, default: null },
    image: { type: String, default: null },
    hasImage: { type: Boolean, default: false },
  },
  //data(data) {
    //if (this.dbug) { console.log("running modal wi data ",data) }
   // return {
    //    data
    //}
  //},
  setup(){
      const iconClose = process.env.BASE_URL +'assets/'+'icon/icon-close-outline.svg';
      //if (this.dbug) { console.log("running modal ", iconClose) }
      return { iconClose }
  },
  methods: {

      async closeModal(){
          //if (this.dbug) { console.log("Close modal", this) }
          await modalController.dismiss();
      }
  }
});
</script>