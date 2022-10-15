<template>
  <v-container tag="section" class="popular mb-10">
    <h2 class="popular__title">What's popular</h2>
    <v-row>
      <MovieItem 
        v-for="movie in getPopularMovies"
        v-bind:movie="movie"
        :key="movie.id"
      />
    </v-row>
  </v-container>
</template>

<script>
import MovieItem from './MovieItem.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'PopularMovies',
  components: {MovieItem},
  computed: mapGetters(['getPopularMovies']),
  methods: mapActions(['fetchPopularMovies']),
  async mounted() {
    await this.fetchPopularMovies();
  }  
}
</script>

<style scoped lang="scss">
.popular {
  max-width: 1000px;

  &__title {
    margin-top: 50px;
    margin-bottom: 30px;
  }
}
</style>