<template>
    <ion-content class="ion-padding">
        <h2>Welcome to Geodes</h2>
        <strong>Ready to Experience?</strong>
        <p>
            Proceed to <router-link :to="{name: 'Map'}">Map</router-link>
        </p>

        <div v-if="error" class="error">
          {{ error }}
        </div>
    </ion-content>
</template>

<script>
import { IonContent} from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

const dbug = process.env.VUE_APP_DEBUG;

export default defineComponent({
  name: 'Geode',
  components: {
    IonContent,
  },
  setup() {
    const route = useRoute();
    const { id } = route.params;
    if (dbug) { console.log("setup Geodes.vue for id =", id)}
    return { id };
  },
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  /*created () {
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
      getPost(fetchedId, (err, post) => {
        // make sure this request is the last one we did, discard otherwise
        if (this.$route.params.id !== fetchedId) return
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
      this.post = []
    }
  }*/
});
</script>

<style scoped>

</style>