<template>
  <ion-page>
    <ion-content class="ion-padding" :fullscreen="true">
      <div id="mapDiv" ref="mapDivContainer">
        <slot></slot>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage} from '@ionic/vue'; //, loadingController } from '@ionic/vue';
import { defineComponent, ref, provide } from 'vue';
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

   //const mapDiv = ref(mapDivContainer); //'<div id="mapDiv" ref="mapDiv"></div>'; //document.getElementById("mapDiv");
   const mapDiv = ref(null)
    const mapsLoader = Geo.loadMap; /*{
      apiKey: apiKey,
      version: "weekly",
      mapIds: mapIds,
      libraries: [
        "places",
        "drawing",
        "geometry",
        "visualization",
        "localContext"
      ]
    });*/
   //const mapPromise = Geo.initMap(mapDiv)

  const mapPromise = mapsLoader().then(() => {
      const map = Geo.initMap(mapDiv)
      /*const map = new google.maps.Map(mapContainer.value, {
        zoom: props.zoom,
        mapId: "889b7f2cfa338388",
        center: new google.maps.LatLng(51.2228924, 6.788524),
        disableDefaultUI: disableDefaultUi,
        gestureHandling: "auto",
      });*/

      //if (props.centerGeoCoordinates && props.centerGeoCoordinates.length) {
      //  fitMapToMarkers(props.centerGeoCoordinates, map);
      //}

      return map;
    });

    provide("mapPromise", mapPromise);
   //const map = Geo.initMap(mapDiv);
    //const apiKey = inject(
     //   "apiKey"
    //);

    //const mapIds = inject(
    //    "mapIds"
   // );


   // const disableDefaultUi = props?.options?.disableDefaultUI ? true : false

   /* const mapPromise = mapsLoader.load().then(() => {
      const map = new google.maps.Map(mapContainer.value, {
        zoom: props.zoom,
        mapId: "889b7f2cfa338388",
        center: new google.maps.LatLng(51.2228924, 6.788524),
        disableDefaultUI: disableDefaultUi,
        gestureHandling: "auto",
      });

      if (props.centerGeoCoordinates && props.centerGeoCoordinates.length) {
        fitMapToMarkers(props.centerGeoCoordinates, map);
      }

      return map;
    });*/

    //provide("mapPromise", mapPromise);


   // let markers = odes.stack;
   console.log("SETUP map rul wi ",mapDiv, mapPromise)
    return { mapDiv, mapPromise } // {geo, markers, home, publicPath: process.env.BASE_URL};
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
