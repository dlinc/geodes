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
    console.log("SETUP Loader component")
    const timeout = 2000
    return {
      timeout
    }
  },
  methods: {
    async presentLoading() {
      console.log("Present Loader compoonet 1");
      
      const loader = await loadingController
        .create({
          cssClass: 'loader',
          message: 'Please wait...',
          duration: this.timeout,
        });

      await loader.present();

      setTimeout(function() {
        loader.dismiss()
      }, this.timeout);
    },
    async presentLoadingWithOptions() {
      console.log("present loader component 2")
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