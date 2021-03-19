<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <h2>Welcome to Geodes</h2>
        <div class="plainText">You may be seeing this because your location is not available. Check the location indicator on the top left &mdash; enable geolocation for this site if necessary and refresh.</div>
        
        <div class="plainText">
            Otherwise, proceed to the <router-link :to="{name: 'Map'}">Map</router-link>
        </div>
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