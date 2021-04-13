<template>
  <ion-page>
    <ion-content class="ion-padding" :fullscreen="true">

        <GMapMap 
          ref="myMap"
          :center="geo.options.center"
          :zoom="geo.options.zoom"
          :map-type-id="geo.options.mapTypeId"
          style="width: 100%; height: 100%"
          setTilt="75"
        >
          <GMapMarker
            ref="myMarker"
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

let geo =  Geo.getGeo()
let odes = Odes.getOdes()
//let map = null //this.myMarker

console.log("SETUP MAP run it", geo, odes, global.map)

/*function addMarker (map){
    console.log("Adding marker ", this,map)
       new google.maps.Marker({
          position: this.position,
          map,
          title: this.title,
        })
    return
}*/
export default defineComponent({
  name: 'Map',
  components: {
    IonContent,
    IonPage
  },
  setup() {

   let home = [
    {
      position: {
        lat:geo.here.latitude,
        lng: geo.here.longitude
      },
    }
  ]
   let markers = odes.stack; /*.map( (p) => {
     p.position = {
      lat: Number(p.lat),
      lng: Number(p.lon)
     }
     return p
   })*/
   console.log("SETUP map rul wi ",geo,odes)
    return {geo, markers, home, publicPath: process.env.BASE_URL};
 },
  methods: {
    drawMarkers() {
      let odes =  Odes.getOdes()
      const map = this.$refs.myMap
      //let map = this.$refs.myMap;
      console.log("Draw markers for odes ", odes,this.$refs.myMap)
      //addMarker(odes[1],this.$refs.myMap)
    

     // eslint-disable-next-line no-undef
     new google.maps.Marker({
          position: odes.stack[0].position,
          map,
          title: odes.stack[1].title,
        })
    },
    clickView(ode) {
        //this.openModal(ode)
        console.log("clicked from map ",ode);
    },
    add(e){
     // let counter = 0
     console.log("method ADD ", e)
     // this.counter += 1 
    }
  },
  beforeRouteEnter () {
     console.log("MAPS: beforeRouteEnter ")
  }, 
  updated () {
    this.drawMarkers(this.odes)
    console.log("MAP rendered event")
  },
  mounted (){
    console.log("mounted is this -",this.$refs.myMap)
  }
});
</script>
