<template>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-label class="ion-padding">GEODES</ion-label>
        <router-link :to="{name: 'Zone'}">Location</router-link>
        <ion-chip class="ion-float-right">
          <ion-avatar border-radius="15">
            <ion-img :src="`${user.icon}`"></ion-img>
          </ion-avatar>
          <ion-label>{{ user.name }}</ion-label>
        </ion-chip>
      </ion-toolbar>
    </ion-header>
</template>

<script>
import { defineComponent } from 'vue';
import { 
  IonToolbar, 
  IonHeader,
  IonChip,
  IonAvatar,
  IonImg,
} from '@ionic/vue';
import User from "../factories/userFactory"
//import { calendar, personCircle } from 'ionicons/icons';

//console.log("ENV ", process.env)
//

export default defineComponent({
  components: { IonToolbar, IonHeader, IonChip, IonAvatar, IonImg },
  setup() { 
    let user = User.getUser()
    return {
      user
    }
  },
});
</script>