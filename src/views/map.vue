<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <GMapMap
          :center="center"
          :zoom="7"
          map-type-id="terrain"
          style="width: 100vh; height: 100vh"
        >
      </GMapMap>
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
  /*props: {
    lat: 51.093048, lng: 6.842120
  },*/
  data() {
   /// const route = useRoute();
  let options =  { } 

   const center = {lat: 1.093048, lng: 16.842120};
   console.log("SETUP MAP run", center)
    //const { x1,x2,y1,y2 } = route.query;
    //console.log("Params in -", route.query );
    return {center, options}; //{ x1,x2,y1,y2 };
  },
  
  /* wi custom icons:

   <GMapMarker
            :icon="'https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png'"
            :key="marker.id"
            :clickable="true"
            @click="openInfoWindow(marker.id)"
            v-for="marker in geoCoordinates"
            :position="marker.position"
        >

  */
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
      //Geo.initMap();
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
