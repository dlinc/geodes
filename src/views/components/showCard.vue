<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-page>
     {{ content }}
    </ion-page>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'showCard',
  props: {
    title: { type: String, default: 'Title Geode' },
  },
  data(data) {
    return {
      content: data.content,
    }
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonPage }
});
</script>