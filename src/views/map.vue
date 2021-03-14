<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <GMapMap
          :center="geo.options.center"
          :zoom="geo.options.zoom"
          map-type-id="terrain"
          style="width: 100%; height: 100%"
        >
         <GMapMarker
            :key="index"
            v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :icon="'https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png'"
              @click="openInfoWindow(marker.id)"
              :draggable="true"
          />
          <GMapInfoWindow
            :opened="true"
            :options=" {
                  pixelOffset: {
                    width: 10, height: 0
                  },
                  maxWidth: 320,
                  maxHeight: 320,
          }"
          >
            <div>I am in info window
            </div>
          </GMapInfoWindow>
      </GMapMap>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage} from '@ionic/vue'; //, loadingController } from '@ionic/vue';
import { defineComponent } from 'vue';
import Geo from "../factories/geoFactory";
import Odes from "../factories/odeFactory";

export default defineComponent({
  name: 'Map',
  components: {
    IonContent,
    IonPage
  },
  data() {
   /// const route = useRoute();
   let geo =  Geo.getGeo()
  // let odes = Odes.getOdes()
   //const center = {lat: geo.here.latitude, lng: geo.here.longitude};
   console.log("SETUP MAP run", geo)
   let markers = [
        {
          position: {
            lat:geo.here.latitude,
             lng: geo.here.longitude
          },
        }
      ]
    //const { x1,x2,y1,y2 } = route.query;
    //console.log("Params in -", route.query );
    return {geo, markers}; //{ x1,x2,y1,y2 };
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
     // Geo.helloGeo("inputsFromMap");
      let geo = Geo.getGeo();
      console.log("** Geo set to -",geo )

      let odes = Odes.getOdes();
      console.log("** Odes set to -",odes )
      //Geo.initMap();
     /* async function showLoading() {
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
      showLoading();*/
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
