<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <h2>Yo Geode {{ id }}!</h2>
        <strong>Ready to Experience?</strong>
        <p>
            Proceed to <router-link :to="{name: 'Map'}">Map</router-link>
        </p>
      </div>
      <div class="post">
        <div v-if="loading" class="loading">
          Loading...
        </div>

        <div v-if="error" class="error">
          {{ error }}
        </div>

        <div v-if="post" class="content">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Geode',
  components: {
    IonContent,
    IonPage
  },
  setup() {
    const route = useRoute();
    const { id } = route.params;
    return { id };
  },
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      //const fetchedId = this.$route.params.id
      // replace `getPost` with your data fetching util / API wrapper
      /*getPost(fetchedId, (err, post) => {
        // make sure this request is the last one we did, discard otherwise
        if (this.$route.params.id !== fetchedId) return
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })*/
      this.post = []
    }
  }
});
</script>

<style scoped>

</style>