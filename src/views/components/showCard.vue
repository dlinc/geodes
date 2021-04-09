<template>
 <ion-page>
    <ion-header>
        <ion-toolbar>
        <ion-title>Geode</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <ion-card>
                <ion-card-header>
                    <ion-img :src="`${image}`" v-if = hasImage></ion-img>
                    <ion-icon name="water-outline"></ion-icon>
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
import { IonContent, IonImg, IonIcon, IonHeader, IonTitle, IonToolbar, IonPage,IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader } from '@ionic/vue';
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
  data(data) {
    return {
      content: data.content,
    }
  }
});
</script>