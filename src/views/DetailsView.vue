<template>
  <div class="main">
    <Details v-bind:movieDetails="getDetailsMovie"/>
  </div>
</template>

<script>
import Details from '../components/Details.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'DetailsView',
  components: {Details},
  computed: mapGetters(['getDetailsMovie']),
  methods: mapActions(['fetchDetailsMovie']),
  async mounted() {
    await this.fetchDetailsMovie(this.$route.params.movieId);
  }  
}
</script>

<style scoped lang="scss">
</style>