<template>
  <v-container class="search-results">
    <h2 class="search-results__title">Search results</h2>
    <v-row>
      <MovieItem 
        v-for="movie in getSearchResults"
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
  name: 'SearchResults',
  components: {MovieItem},
  computed: mapGetters(['getSearchResults']),
  methods: mapActions(['fetchSearchResults']),
  async mounted() {
    await this.fetchSearchResults(this.$route.params.query);
  }  
}
</script>

<style scoped lang="scss">
.search-results {
  max-width: 1000px;

  &__title {
    margin-top: 50px;
    margin-bottom: 30px;
  }
}
</style>