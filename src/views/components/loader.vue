<template>
  <ion-button @click="presentLoading">Show Loading</ion-button>
  <br />
  <ion-button @click="presentLoadingWithOptions">Show Loading Async</ion-button>
</template>

<script>
import { IonButton, loadingController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  setup () {
    const loader = loadingController

    return {
      loader
    }
  },
  props: {
    timeout: { type: Number, default: 10000 },
  },
  methods: {
    async presentLoading() {
      const loading = await loadingController
        .create({
          cssClass: 'loader',
          message: 'Please wait...',
          duration: this.timeout,
        });

      await loading.present();

      setTimeout(function() {
        loading.dismiss()
      }, this.timeout);
    },
    async presentLoadingWithOptions() {
      const loading = await loadingController
        .create({
          spinner: null,
          duration: this.timeout,
          message: 'Click the backdrop to dismiss early...',
          translucent: true,
          cssClass: 'custom-class custom-loading',
          backdropDismiss: true
        });

      await loading.present();

      setTimeout(function() {
        loading.dismiss()
      }, this.timeout);
    }
  },
  components: { IonButton }
});
</script>