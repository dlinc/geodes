<template>
<ion-item>
    <ion-label>Latitude: {{ lprops.latitude }} </ion-label></ion-item>
<ion-item>    <ion-label>Longitude: {{ lprops.longitude }}</ion-label></ion-item>
<ion-item>    <ion-label>Altitude: {{ lprops.altitude }}</ion-label></ion-item>
<ion-item>    <ion-label>Accuracy: {{ lprops.accuracy }}</ion-label></ion-item>
 <ion-item>   <ion-label>Alt Accuracy: {{ lprops.altitudeAccuracy }}</ion-label></ion-item>
<ion-item>    <ion-label>Heading: {{ lprops.heading }}</ion-label></ion-item>
<ion-item>    <ion-label>Speed: {{ lprops.speed }}</ion-label></ion-item>
<ion-item>    <ion-label>Compass: {{ lprops.compass }} </ion-label></ion-item>
<ion-item>    <ion-label>Logged in:  lprops.loggedIn  </ion-label>
</ion-item>
</template>

<script>
import { IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
import Geo from './../../factories/geoFactory'

function getLocData(){
  const defaultGeo = {
            accuracy: -1,
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            latitude: 35.6411562,
            latitude0: 35.6411562,
            longitude: -105.9715909,
            longitude0: -105.9715909
          }
   let geo = Geo.getGeo()
   return (geo.status!=="found" ? defaultGeo : geo.here)
}
export default defineComponent({
components: { IonItem, IonLabel, },
    setup() {
    // mounted
   /* onMounted(() => {
      console.log('LOCATION Component is mounted!')
    })*/
  },
  data () {
    /*const defaultGeo = [
      {id: "accuracy", val: 58 },
      {id: "altitude", val: null},
      {id: "altitudeAccuracy", val: null},
      {id: "heading", val: null},
      {id: "latitude", val: 35.6411562},
      {id: "longitude", val: -105.9715949}
    ]*/
    /*const defaultGeo = {accuracy: 58,
                altitude: null,
                altitudeAccuracy: null,
                heading: null,
                latitude: 35.6411562,
                latitude0: 35.6411562,
                longitude: -105.9715909,
                longitude0: -105.9715909}

    let geo = Geo.getGeo()
    let lprops = (geo.status!=="found" ? defaultGeo : geo.here)*/
    let lprops = getLocData()
    console.log("location props ",lprops)
    return {
      lprops
    }
  },
  beforeUpdate(){
      console.log('LOCATION new Component is mounted!')
  },
  methods: {
    showSpinner () {
      console.log("Show Spinner")
     },
     hideSpinner (){
       console.log("Hide Spinner")
     }
  }
});
</script>