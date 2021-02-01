<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <h2>Yo Zone !</h2>
        <strong>Ready to Zone?</strong>
        <h2>lat1 {{ x1 }}</h2>
        <h2>lat2 {{ x2 }}</h2>
        <h2>long1 {{ y1 }}</h2>
        <h2>long2 {{ y2 }}</h2>
        <p>
            Proceed to <router-link :to="{name: 'Map'}">Map</router-link>
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Zone',
  components: {
    IonContent,
    IonPage
  },
  setup() {
    const route = useRoute();
    
    const { x1,x2,y1,y2 } = route.query;
    console.log("Params in -", route.query );
    return { x1,x2,y1,y2 };
  }
});
</script>

<style scoped>

</style>