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
              type="text"
              spellcheck="true"
              inputmode="text"
              ></ion-input>
          </ion-label>
      </ion-item>

      <ion-item>
        <ion-label>Text
        <ion-textarea
              name="text" 
              value=""
              auto-grow="true"
              color="primary"
              spellcheck="true"
              inputmode="text"
        ></ion-textarea>
        </ion-label>
      </ion-item>

      <ion-item>
        <ion-label>Media
          
           <ion-item>
              <ion-label>Photo</ion-label>
              <ion-input
                  name="photo" 
                  value=""
                  color="secondary"
                  type="text"
              ></ion-input>
          </ion-item>

          <ion-item>
              <ion-label>Audio</ion-label>
              <ion-input
                  name="audio" 
                  value=""
                  color="secondary"
                  type="text"
              ></ion-input>
          </ion-item>

          <ion-item>
              <ion-label>Video</ion-label>
              <ion-input
                  name="video" 
                  value=""
                  color="secondary"
                  type="text"
              ></ion-input>
          </ion-item>

          <ion-item>
              <ion-label>360 degree image</ion-label>
              <ion-input
                  name="360image" 
                  value=""
                  color="secondary"
                  type="text"
              ></ion-input>
          </ion-item>

        </ion-label>
      </ion-item>

      <ion-item>
          <ion-label>Privacy
          <ion-item>
            <ion-label>Private</ion-label>
            <ion-checkbox 
                name="private"
                checked="false"
                color="primary"
                ></ion-checkbox>
          </ion-item>

          <ion-item>
            <ion-label>Radius</ion-label>
            <ion-range 
              min="0" 
              max="1000"
              value="1000"
              pin="true"
              color="secondary"
            >
            <ion-label slot="start">0</ion-label>
              <ion-label slot="end"><span class="superSize">&#8734;</span> m</ion-label>
            </ion-range>
          </ion-item>
        </ion-label>
      </ion-item>
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
  IonRange,
  IonTextarea,
  IonCheckbox,

} from '@ionic/vue';

export default defineComponent({
  components: { IonContent,  IonPage, IonInput,  IonLabel, IonItem, IonRange, IonTextarea, IonCheckbox},
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
});
</script>

<style scoped>
h2 {
  padding-top:2em;
}
</style>