<template>
  <ion-page>
    <ion-content class="ion-padding" :fullscreen="true">
          <ion-list-header class="offset-top">
            <ion-label>{{ hitCount }} Proximate Hits</ion-label>
                <button @click="modalOpen = true">
                    Open full screen modal! (With teleport!)
                </button>
                <modal-button></modal-button>
        </ion-list-header>
        <ion-list>
            <ion-item 
              v-for="ode in odes" 
              v-bind:key="ode.sid"
              @click.stop="clickView(`${ode.sid}`)"
              >
              <ion-item-divider>
                <ion-label>{{ ode.title }}</ion-label>
              </ion-item-divider>   
            </ion-item> 
        </ion-list>
    </ion-content>
  </ion-page>
  <teleport to="body">
      <div v-if="modalOpen">
        <div>
          I'm a teleported modal! 
          (My parent is "body")
          <button @click="modalOpen = false">
            Close
          </button>
        </div>
      </div>
  </teleport>
</template>

<script>
import { defineComponent} from 'vue';
import Odes from "../factories/odeFactory"
import {
  IonContent,
  IonPage,
  IonList,
  IonLabel,
  IonItem,
  IonListHeader,
  IonItemDivider,
} from '@ionic/vue';

export default defineComponent({
  components: { IonContent, IonPage, IonList, IonLabel, IonItem, IonListHeader,IonItemDivider,} ,
  data () {
    let odes=Odes.getOdes().stack
    console.log("roll LIST view ",odes)
    return {
      odes, 
      hitCount:odes.length,
      modalOpen: false
    }
  },
  methods: {
      clickView: function (id) {
        alert("clicked test "+id)
      }
  },
  beforeMount(){
    console.log("LIST before mount",this.odes)
  },
  beforeUpdate(){
    this.odes==Odes.getOdes().stack
    console.log("LIST before update",this.odes)
    return this.odes
  },
  updated () {
    console.log("LIST rendered event",this.odes)
    //this.loading.dismiss()
  }
  //, Loaders }
});

</script>