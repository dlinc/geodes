<template>
  <ion-spinner name="dots"></ion-spinner>
</template>

<script>
import { IonSpinner } from '@ionic/vue';
import { defineComponent, toRef } from 'vue';

export default defineComponent({
components: { IonSpinner },
  
  setup (props) {
    const { duration } = toRef(props)

    console.log("Setup duration of spinner ",duration)

    return {
      duration,
    }
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