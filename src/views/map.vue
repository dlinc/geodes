<template>
  <ion-page>
    <ion-content :fullscreen="true">
    
        <GMapMap 
          ref="myMarker"
          :center="geo.options.center"
          :zoom="geo.options.zoom"
          map-type-id="terrain"
          style="width: 100%; height: 100%"
          setTilt="75"
        >
          <GMapMarker
            :key="index"
            v-for="(m, index) in markers"
              :position="m.position"
              :draggable="false"
              :icon="`${publicPath}assets/icon/iconThere.png`"
              :clickable="true"
              @click.once="add(counter)" 
            ></GMapMarker>
          <GMapMarker
            :key="marker.id"
            :clickable="true"
            @click.once="add(counter+1)"
            :draggable="true"
            :icon="`${publicPath}assets/icon/iconHere.png`"
            v-for="marker in home"
              :position="marker.position"
            > 
            <GMapCircle
                  :center="geo.options.center"
                  :radius="geo.here.accuracy"
                  :options="geo.options.zone"
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
              <div style="color:black;">I am in info window {{ counter }} </div>
                <button @click="add(counter)">Add 1</button>
              </GMapInfoWindow>
          </GMapMarker>
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
   let odes = Odes.getOdes()
   //const center = {lat: geo.here.latitude, lng: geo.here.longitude};
   console.log("SETUP MAP run", geo)
   let home = [
    {
      position: {
        lat:geo.here.latitude,
        lng: geo.here.longitude
      },
    }
  ]
  //console.log("Odes collection is ", odes)
   let markers = odes.stack.map( (p) => {
     //console.log("ode p of ",p)
     p.position = {
      lat: Number(p.lat),
      lng: Number(p.lon)
     }
     return p
   })
    let counter = 0
    console.log("All markers ", markers)
    //const { x1,x2,y1,y2 } = route.query;
    //console.log("Params in -", route.query );
    return {geo, markers, home, publicPath: process.env.BASE_URL,counter}; //{ x1,x2,y1,y2 };
  },
  methods: {
    test() {
      console.log("method test ")
    },
    add(){
      console.log("method ADD ", this.counter)
      this.counter += 1 
    }
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
      //let geo = Geo.getGeo();
     // console.log("** Geo set to -",geo )

     // let odes = Odes.getOdes();
     // console.log("** Odes set to -",odes )
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
    console.log("MAP rendered event",this)
    //this.loading.dismiss()
  }
});
</script>
