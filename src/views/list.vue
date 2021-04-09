<template>
  <ion-page>
    <ion-content class="ion-padding" :fullscreen="true">
          <ion-list-header class="offset-top">
            <ion-label>{{ hitCount }} Proximate Hits</ion-label>
        </ion-list-header>
        <ion-list>
            <ion-item 
              v-for="ode in odes" 
              v-bind:key="ode.sid"
              @click.stop="clickView(ode)"
              >
              <ion-item-divider class="ion-padding">
                      <ion-thumbnail slot="start">
                          <ion-img :src="ode.userIcon"></ion-img>
                      </ion-thumbnail>
                <ion-label class="ion-padding">{{ ode.title }}</ion-label>
                <ion-label class="ion-padding">{{ ode.lDistance }}</ion-label>
              </ion-item-divider>   
            </ion-item> 
        </ion-list>
    </ion-content>
  </ion-page>
</template>
<script>
import { defineComponent, ref} from 'vue';
import Odes from "../factories/odeFactory"
import ShowCard from "./components/showCard"

import {
  IonContent,
  IonPage,
  IonList,
  IonLabel,
  IonItem,
  IonListHeader,
  IonItemDivider,
  IonThumbnail,
  IonImg,
  modalController
} from '@ionic/vue';

// eslint-disable-next-line no-unused-vars
//const defaultGeodeImage = "/assets/master1.jpg";

export default defineComponent({
  components: { 
    IonContent, 
    IonPage, 
    IonList, 
    IonLabel, 
    IonItem, 
    IonListHeader,
    IonItemDivider,
    IonThumbnail,
    IonImg
    },
//  inject:['assetsDirectory'],
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state) => isOpenRef.value = state;
    const data = { content: 'New Content XXX' };
    return { isOpenRef, setOpen, data }
  },
  data () {
    let odes=Odes.getOdes().stack
    
    console.log("roll LIST view ",odes); //, defaultGeodeImage)
    return {
      odes, 
      hitCount:odes.length
    }
  },
  methods: {
      clickView(ode) {
        //this.setOpen(true)
        this.openModal(ode)
        console.log("clicked test ",ode.title); //,defaultGeodeImage)
      },
      async openModal(ode) {
        const modal = await modalController
          .create({
            component: ShowCard,
            cssClass: 'my-custom-class',
            swipeToClose: true,
            componentProps: {
              title: ode.title,
              body: ode.stroke,
              proximity: ode.lDistance,
              timestamp: ode.dt,
              byline: ode.byline,
              icon: ode.userIcon,
              image: (ode.image ? ode.image : null),
              hasImage: (ode.image ? true : false)
            },
          })
        return modal.present(modal);
    },
  },
  beforeMount(){
   console.log("LIST before mount",this.odes)
  },
  beforeUpdate(){
    //this.odes==Odes.getOdes().stack
    console.log("LIST before update",this.odes)
    return this.odes
  },
  updated () {
    console.log("LIST updated event",this.odes)
    //this.loading.dismiss()
  }
  //, Loaders }
});

</script>