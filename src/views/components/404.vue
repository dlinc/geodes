/* eslint-disable  no-mixed-spaces-and-tabs */
<template>
 <ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title class="ion-float-left ion-padding">404: File not found</ion-title>
           </ion-toolbar>
    </ion-header>
    <ion-content>
      <div> Sorry, we couldn't find that {{ url }}. Check your link and try again.</div>
    </ion-content>
</ion-page>
</template>
<script>
import { IonContent, IonHeader, IonTitle,  IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

//const dbug = process.env.VUE_APP_DEBUG;

export default defineComponent({
  components: { IonContent, IonHeader, IonTitle,   IonPage },
  name: '404',
  props: {
    url: { type: String, default: 'web address' }
  },

});
</script>

<style scoped>
</style>