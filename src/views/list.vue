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
import Odes from "../factories/odeFactory";

import {
  IonContent,
  IonPage,
  IonList,
  IonLabel,
  IonItem,
  IonListHeader,
  IonItemDivider,
  IonThumbnail,
  IonImg
} from '@ionic/vue';


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

  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state) => isOpenRef.value = state;
    const data = { content: 'New Content XXX' };
    return { isOpenRef, setOpen, data }
  },
  data () {
    let odes=Odes.getOdes().stack
    
    if (this.dbug) { console.log("roll LIST view ",odes); }
    return {
      odes, 
      hitCount:odes.length
    }
  },
  methods: {

      clickView(ode) {
        //this.setOpen(true)
        if (this.dbug) { console.log("Show - ",ode.title); } 
        Odes.odeModal(ode)
      },
  },

  beforeMount(){
   if (this.dbug) {console.log("LIST before mount",this.odes) }
  },

  beforeUpdate(){
    if (this.dbug) { console.log("LIST before update",this.odes) }
    return this.odes
  },

  updated () {
    if (this.dbug) { console.log("LIST updated event",this.odes) }
  }

});

</script>