<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <h2>Yo Geode {{ id }}!</h2>
        <strong>Ready to Experience?</strong>
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
  name: 'Geode',
  components: {
    IonContent,
    IonPage
  },
  setup() {
    const route = useRoute();
    const { id } = route.params;
    return { id };
  }
});
</script>

<style scoped>

</style>