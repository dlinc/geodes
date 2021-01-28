<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <h2>Yo World out there!</h2>
        <strong>Ready to Map?</strong>
        <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Map',
  components: {
    IonContent,
    IonPage
  }
});
</script>

<style scoped>

</style>