<template>
  <ion-page>
    <ion-content class="ion-padding" :fullscreen="true">>
      <h2>Add</h2>

      <ion-item>
        <ion-label>Title
        <ion-input 
          placeholder="required" 
          name="title"
          required="true"
          autofocus="true"
          color="primary"
          ></ion-input>
          </ion-label>
      </ion-item>

      <ion-item>
        <ion-label>Text
        <ion-textarea
              position="floating" 
              name="textInput" 
              value=""
              auto-grow="true"
              color="secondary"
        ></ion-textarea>
        </ion-label>
      </ion-item>

          <ion-label>Restrict
          <ion-item>
            <ion-label>Private
            <ion-checkbox 
                name="private"
                checked="false"
                color="primary"
                ></ion-checkbox>
                </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Radius</ion-label>
            <ion-range min="0" max="1000" color="secondary">
            <ion-label slot="start">0</ion-label>
              <ion-label slot="end">1000</ion-label>
            </ion-range>
          </ion-item>
        </ion-label>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonContent,
  IonPage,
  IonInput,
  IonLabel,
  IonItem,
  IonTextarea,
  IonCheckbox,

} from '@ionic/vue';

export default defineComponent({
  components: { IonContent,  IonPage, IonInput,  IonLabel, IonItem,IonTextarea, IonCheckbox},
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
});
</script>