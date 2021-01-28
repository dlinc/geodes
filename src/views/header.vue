<template>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Geodes</ion-title>
      </ion-toolbar>
    </ion-header>
</template>

<script>
import { defineComponent } from 'vue';
import { 
  IonToolbar, 
  IonTitle,
  IonHeader
} from '@ionic/vue';
//import { calendar, personCircle } from 'ionicons/icons';

//console.log("ENV ", process.env)
//

export default defineComponent({
  components: { IonToolbar, IonTitle, IonHeader }
});
</script>