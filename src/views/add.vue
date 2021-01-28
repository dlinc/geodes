<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <h2>Add Tab</h2>
      <h3>1</h3>
       <h3>2</h3>
        <h3>3</h3>
         <h3>4</h3>
          <h3>5</h3>
           <h3>6</h3>
            <h3>7</h3>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonContent,
  IonPage
} from '@ionic/vue';

export default defineComponent({
  components: { IonContent,  IonPage },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
});
</script>