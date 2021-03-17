<template>
  <ion-page>
    <ion-content class="ion-padding" :fullscreen="true">

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
              @click="add($event)" 
            ></GMapMarker>
          <GMapMarker
            :key="marker.id"
            :clickable="true"
            @click="add($event)"
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
   let geo =  Geo.getGeo()
   let odes = Odes.getOdes()
   console.log("SETUP MAP run", geo)
   let home = [
    {
      position: {
        lat:geo.here.latitude,
        lng: geo.here.longitude
      },
    }
  ]
   let markers = odes.stack.map( (p) => {
     p.position = {
      lat: Number(p.lat),
      lng: Number(p.lon)
     }
     return p
   })
    let counter = 0
    return {geo, markers, home, publicPath: process.env.BASE_URL,counter};
 },
  methods: {
    add(e){
      console.log("method ADD ", this.counter, e)
      this.counter += 1 
    }
  },
  beforeRouteEnter () {
     console.log("MAPS: beforeRouteEnter ")
  }, 
  updated () {
    console.log("MAP rendered event")
  }
});
</script>
