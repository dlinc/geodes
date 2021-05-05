<template>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-label class="ion-padding">GEODES</ion-label>
        <ion-chip class="ion-float-right" v-if = loggedIn @click.stop="showUser()">
          <ion-avatar border-radius="15">
            <ion-img :src="`${user.icon}`"></ion-img>
          </ion-avatar>
          <ion-label>{{ user.name }}</ion-label>
        </ion-chip>
        <ion-label class="ion-float-right signInLink" v-if = !loggedIn @click.stop="showLogin()">Sign In</ion-label>
      </ion-toolbar>
    </ion-header>
</template>

<script>
import { defineComponent } from 'vue';
import { 
  IonToolbar, 
  IonHeader,
  IonChip,
  IonLabel,
  IonAvatar,
  IonImg,
} from '@ionic/vue';
import User from "../factories/userFactory"
//import { calendar, personCircle } from 'ionicons/icons';

//console.log("ENV ", process.env)
//

const dbug = process.env.VUE_APP_DEBUG;

export default defineComponent({
  components: { IonToolbar, IonHeader, IonChip, IonLabel, IonAvatar, IonImg },
  props: {
    loggedIn: { type: Boolean, default: false },
  },
  setup() { 
    let user = User.getUser()
    return {
      user
    }
  },
  methods: {
        showLogin(){
          if (dbug) { console.log("Show login modal") }
        },
        showUser(){
          if (dbug) { console.log("Show user",this.user.id) }
        },
  }
});
</script>

<style scoped>
.signInLink {
  font-size: smaller;
  padding-right:1em;
}
</style>