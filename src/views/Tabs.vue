<template>
  <ion-page>
    <ion-tabs @ionTabsWillChange="beforeTabChange" @ionTabsDidChange="afterTabChange">
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="refresh" href="/refresh">
          <ion-icon :src="`${publicPath}assets/icon/refresh-outline.svg`"></ion-icon>
          <ion-label>Map</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="list" href="/list">
          <ion-icon :src="`${publicPath}assets/icon/list-outline.svg`"></ion-icon>
          <ion-label>List</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="add" href="/add">
          <ion-icon :src="`${publicPath}assets/icon/add-circle-outline.svg`"></ion-icon>
          <ion-label>Add</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { 
  IonIcon, 
  IonLabel, 
  IonPage,
  IonTabBar, 
  IonTabButton, 
  IonTabs
} from '@ionic/vue';
import { calendar, personCircle } from 'ionicons/icons';

console.log("ENV ", process.env)


export default defineComponent({
  components: { IonIcon, IonLabel, IonPage, IonTabBar, IonTabButton, IonTabs },
  setup() {
    const beforeTabChange = (t) => {
      // do something before tab change
      console.log("Change tab t =", t);
    }
    const afterTabChange = (t) => {
      // do something after tab change
      console.log("After change tab t =", t);
    }
    return {
      calendar,
      personCircle,
      beforeTabChange,
      afterTabChange
    }
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
});
</script>