<template>
  <ion-page>
    <ion-content class="ion-padding" :fullscreen="true">
 
           <div id="container">
          <h2>Welcome to Geodes </h2>
          <div v-if = !ready >
            <div class="plainText">You may be seeing this because your location is not available. Check the location indicator on the top left &mdash; and enable geolocation, if necessary, and refresh.
            </div>
            
            <div class="plainText">
                Otherwise, proceed to the <router-link :to="{name: 'Map'}">Map</router-link>
            </div>
        </div>
        <div v-if = ready >
            <h2> Your location </h2>
            <div class="plainText">
                <span class = "locationDetails">Latitude: {{ geo.here.latitude }} </span>
                <span class = "locationDetails">Longitude: {{ geo.here.longitude }}</span>
                <span class = "locationDetails">Altitude: {{ geo.here.altitude }}</span>
                <span class = "locationDetails">Accuracy: {{ geo.here.accuracy }}</span>
                <span class = "locationDetails">Alt Accuracy: {{ geo.here.altitudeAccuracy }} </span>
                <span class = "locationDetails">Heading: {{ geo.here.heading }}</span>
                <span class = "locationDetails">Speed: {{ geo.here.speed }}</span>
                <span class = "locationDetails">Compass: {{ geo.here.compass }} </span>
                <span class = "locationDetails">Logged in: {{ loggedIn }} </span>
          </div>
            
            <div class="plainText">
                Proceed to the <router-link :to="{name: 'Map'}">Map</router-link>
            </div>
        </div>
      </div>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue'; //, onIonViewWillEnter } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import Geo from "../factories/geoFactory";
import User from "../factories/userFactory";

const dbug = process.env.VUE_APP_DEBUG;
let allLocation = {}
function getLocData(){

   let geo = Geo.getGeo()

    if (geo.status === "found") {
        geo.ready= true
      } else {
      geo.ready = false
    }
    let user = User.getUser()
    return { geo, ready: geo.ready, loggedIn: user.loggedIn }
}

export default defineComponent({
  name: 'Welcome',
  components: {
    IonContent,
    IonPage,
  },
  setup() {

    const route = useRoute();
 
    allLocation = getLocData()
    if (dbug) { console.log("Welcome data - ",route) }
    //let geo = Geo.getGeo();
},
data(){

  return allLocation
}
})
</script>

<style scoped>

</style>