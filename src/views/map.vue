<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <h2>Yo World out there!</h2>
        <strong>Ready to Map?</strong>
        <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
            <p>Welcome to Geodes Please take a minute to read the <a target="_blank" rel="noopener noreferrer" href="">Terms Of Use</a>.</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, loadingController } from '@ionic/vue';
import { defineComponent } from 'vue';
import Geo from "../factories/geoFactory";
import Odes from "../factories/odeFactory";

export default defineComponent({
  name: 'Map',
  components: {
    IonContent,
    IonPage
  },
  props: {
    
  },
  /*data: {
        result: “ ”,
        responseAvailable: false,
        apiKey: '<YOUR_RAPIDAPI_KEY>'
    },*/
  beforeRouteEnter () {

      //this.stopPropagation()
     // AsyncComp
      Geo.helloGeo("inputsFromMap");
      let geo = Geo.getGeo();
      console.log("** Geo returns -",geo )

      let odes = Odes.getOdes();
      console.log("** Odes returns -",odes )
      Geo.initMap();
      async function showLoading() {
          const timeout = { type: Number, default: 50000 }
          const loading = await loadingController
              .create({
                cssClass: 'loader',
                message: 'Please wait...',
                duration: timeout,
              });

           await loading.present();

           setTimeout(function() {
              loading.dismiss()
              console.log("Dismiss loading...")
            }, timeout);
      }
      showLoading();
      //this.loader.presentLoading();
      //loadingController.presentLoading();
      //this.fetchData()
      //this.loader.present();
    //this.fetchData()
  },
  updated () {
    console.log("MAP rendered event")
    //this.loading.dismiss()
  }

});
</script>

<style scoped>
#mapDiv {
  height: 400px;
  width:400px;
  position:absolute;
}
</style>
