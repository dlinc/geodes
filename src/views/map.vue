<template>
  <ion-page>
    <ion-content class="ion-padding" :fullscreen="true">

        <GMapMap 
          ref="myMap"
          :center="geo.options.center"
          :zoom="geo.options.zoom"
          map-type-id="terrain"
          style="width: 100%; height: 100%"
          setTilt="75"
        >
        <GMapCluster :zoomOnClick="true">
          <GMapMarker
            :key="index"
            v-for="(ode, index) in markers"
              :position="ode.position"
              :draggable="false"
              :icon="`${publicPath}assets/icon/iconThere.png`"
              :clickable="true"
              @click="showOde(ode)" 
            ></GMapMarker>
          <GMapMarker
            :key="loc.id"
            :clickable="true"
            @click="showLocation(loc.here)"
            :draggable="true"
            :icon="`${publicPath}assets/icon/iconHere.png`"
            v-for="loc in home"
              :position="loc.position"
            > 
            <GMapCircle
                  :center="geo.options.center"
                  :radius="geo.here.accuracy"
                  :options="geo.options.zone"
              />
          </GMapMarker>
          </GMapCluster>
      </GMapMap>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage} from '@ionic/vue'; //, loadingController } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import Geo from "../factories/geoFactory";
import Odes from "../factories/odeFactory";

export default defineComponent({
  name: 'Map',
  components: {
    IonContent,
    IonPage
  },
  setup(){
    // eslint-disable-next-line no-unused-vars
    const myMap = ref(null)
    return { myMap }
  },

  data() {
   let geo =  Geo.getGeo()
   let odes = Odes.getOdes()

   if (this.dbug) { console.log("Data MAP run", geo) }

   let home = [
    {
      position: {
        lat:geo.here.latitude,
        lng: geo.here.longitude,
        id:0
      },
      here:geo.here
    }
  ]
   let markers = odes.stack.map( (p) => {
     p.position = {
      lat: Number(p.lat),
      lng: Number(p.lon),
      id: p.sid
     }
     return p
   })
    
    return {geo, markers, home, publicPath: process.env.BASE_URL};
 },
  methods: {
    showLocation(pos){
      if (this.dbug) { console.log("Show location ",pos) }
      Geo.locationModal(pos);
    },
    showOde(ode){
      if (this.dbug) { console.log("Show ode ",ode) }
      Odes.odeModal(ode);
    },
    showStreet(id){
        if (this.dbug) { console.log("Show street on MAP ",id) }
        Odes.streetModal(id);
      }
  },
  mounted() {
    if (this.dbug) { console.log("My Map here -",this.$refs.myMap) }
  }
});
</script>
