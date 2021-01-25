<template>
  <ion-app>
    <ion-router-outlet />
    <ion-tabs>

      <ion-tab tab="add">
        <ion-header translucent>
          <ion-toolbar>
            <ion-title>Add</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content fullscreen class="ion-padding">
          <h1>Add</h1>
        </ion-content>
      </ion-tab>

      <ion-tab tab="listView">
        <ion-header translucent>
          <ion-toolbar>
            <ion-title>List View</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content fullscreen class="ion-padding">
          <h1>List View</h1>
        </ion-content>
      </ion-tab>

      <ion-tab tab="refresh">
        <ion-header translucent>
          <ion-toolbar>
            <ion-title>Refresh</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content fullscreen class="ion-padding">
          <h1>Refresh</h1>
        </ion-content>
      </ion-tab>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="add">
          <ion-label>Add</ion-label>
          <ion-icon name="musical-note"></ion-icon>
        </ion-tab-button>
        <ion-tab-button tab="listView">
          <ion-label>List View</ion-label>
          <ion-icon name="videocam"></ion-icon>
        </ion-tab-button>
        <ion-tab-button tab="refresh">
          <ion-label>Refresh</ion-label>
          <ion-icon name="game-controller"></ion-icon>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>